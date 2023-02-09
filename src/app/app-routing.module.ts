import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BallComponent } from './pages/ball/ball.component';
import { GymComponent } from './pages/gym/gym.component';

const routes: Routes = [
  {
    path: 'gym',
    component: GymComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: BallComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
