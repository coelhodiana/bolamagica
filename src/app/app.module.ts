import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShakeDirective } from './shared/directives/shake.directive';
import { BallComponent } from './pages/ball/ball.component';

@NgModule({
  declarations: [
    AppComponent,
    ShakeDirective,
    BallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
