import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss'],
})
export class GymComponent {
  repetitionsCount = 0;

  form = this.fb.group({
    duration: [100, Validators.required],
  });

  resting = false;

  constructor(private fb: FormBuilder) {}

  startRest() {
    this.resting = true;

    setTimeout(() => {
      this.resting = false;
      this.repetitionsCount++;
    }, this.form.value.duration! * 1000);

  }

  resetCount() {
    this.repetitionsCount = 0;
  }
}
