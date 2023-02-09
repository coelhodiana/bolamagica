import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { GymRoutingModule } from './gym-routing.module';
import { GymComponent } from './gym.component';



@NgModule({
  declarations: [GymComponent],
  imports: [
    CommonModule,
    GymRoutingModule,
    ReactiveFormsModule
  ]
})
export class GymModule { }
