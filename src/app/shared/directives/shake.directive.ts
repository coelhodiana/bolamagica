import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[shake]'
})
export class ShakeDirective {

  constructor() {
    console.log('teste')
  }

  @HostBinding('className')
  get cssClasses() {
    return "teste";
  }

}
