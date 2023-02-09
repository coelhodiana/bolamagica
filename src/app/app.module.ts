import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BallComponent } from './pages/ball/ball.component';
import { GymComponent } from './pages/gym/gym.component';
import { ShakeDirective } from './shared/directives/shake.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShakeDirective,
    BallComponent,
    GymComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
