import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import {
  AttributeItem,
  TablesService,
} from './../../shared/services/tables.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  attributes = this.tables.listAttributes();

  form: FormGroup = this.fb.group({
    items: this.fb.array([]),
  });

  formMultVariables = this.fb.group({
    variables: ''
  })

  showVariables = false;

  constructor(private tables: TablesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tables.getAttributes().subscribe((items) => {
      console.log(items);
      this.listItems(items);
    });

    this.addItemsSeparatedByComma();
  }

  get items() {
    return this.form.get('items') as FormArray;
  }

  createItem(name: string = '', alias: string = '') {
    return this.fb.group({
      name,
      alias,
    });
  }

  addItem(name: string = '', alias: string = ''): void {
    this.items.push(this.createItem(name, alias));
  }

  deleteItem(i: number) {
    this.items.removeAt(i);
  }

  listItems(items: AttributeItem[]) {
    items.map((attribute: AttributeItem) => {
      return this.addItem(attribute.name, attribute.alias);
    });
  }

  addItemsSeparatedByComma() {
    const variablesString = this.formMultVariables.controls['variables'].value;

    if(variablesString) {

      console.log(variablesString.split(','));

      const variables = variablesString.split(',').map((item) => {
        return { name: item, alias: '' };
      });

      this.listItems(variables)
    }
  }

  save() {
    this.showVariables = !this.showVariables
  }
}
