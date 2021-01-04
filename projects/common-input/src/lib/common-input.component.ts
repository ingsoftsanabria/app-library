import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-common-input',
  template: `
    <input [attr.type]="m_type" [attr.minlength]="minLength" [attr.maxlength]="maxLength" />
  `,
  styles: [
  ]
})
export class CommonInputComponent implements OnInit {

  @Input()
  m_type: string = "password";

  @Input()
  maxLength: string;

  @Input()
  minLength: string;

  constructor() { }

  ngOnInit(): void {
  }

}
