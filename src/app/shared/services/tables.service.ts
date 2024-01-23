import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';

export type AttributeItem = {
  name: string;
  alias: string;
};
@Injectable({
  providedIn: 'root',
})
export class TablesService {
  attrsObj: AttributeItem[] = [
    {
      name: 'variable1',
      alias: 'the-variable',
    },
    {
      name: 'variable2',
      alias: '',
    },
    {
      name: 'variable3',
      alias: '',
    },
    {
      name: 'variable4',
      alias: 'destination-variable4',
    },
  ];

  attributesSubject = new BehaviorSubject<AttributeItem[]>([]);
  attributes$: Observable<AttributeItem[]> = this.attributesSubject.asObservable();

  constructor() {}

  listAttributes(): AttributeItem[] {
    return this.attributesSubject.value;
  }

  getAttributes(): Observable<AttributeItem[]> {
    return of(this.attrsObj).pipe(delay(100));
  }
}
