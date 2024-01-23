import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BallComponent } from './pages/ball/ball.component';
import { GymComponent } from './pages/gym/gym.component';
import { ShakeDirective } from './shared/directives/shake.directive';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormArrayComponent } from './pages/form-array/form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    ShakeDirective,
    BallComponent,
    GymComponent,
    FormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
