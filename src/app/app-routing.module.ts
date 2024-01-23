import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BallComponent } from './pages/ball/ball.component';
import { GymComponent } from './pages/gym/gym.component';
import { FormArrayComponent } from './pages/form-array/form-array.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/ball',
    pathMatch: 'full',
  },
  {
    path: 'ball',
    component: BallComponent,
  },
  {
    path: 'gym',
    component: GymComponent
  },
  {
    path: 'formarray',
    component: FormArrayComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
