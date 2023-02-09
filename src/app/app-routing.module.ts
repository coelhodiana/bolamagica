import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BallComponent } from './pages/ball/ball.component';

const routes: Routes = [
  {
    path: 'gym',
    loadChildren: () => import('./pages/gym/gym.module').then(m => m.GymModule)
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
