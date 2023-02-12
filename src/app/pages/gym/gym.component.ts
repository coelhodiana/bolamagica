import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { scan, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss'],
})
export class GymComponent {
  
  form = this.fb.group({
    duration: [100, Validators.required],
  });

  repetitionsCount = 1;

  resting = false;

  timer$: any;

  constructor(private fb: FormBuilder) {}

  startRest() {
    this.resting = true;

    this.timer$ = timer(0, 1000).pipe(
      scan((acc) => --acc, this.form.value.duration!),
      takeWhile((x) => x >= 0)
    );

    setTimeout(() => {
      this.resting = false;
      this.repetitionsCount++;
    }, this.form.value.duration! * 1000);

  }

  resetCount() {
    this.repetitionsCount = 0;
  }
}
