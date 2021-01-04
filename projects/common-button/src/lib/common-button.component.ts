import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-common-button',
  template: `
    <button type="button">Click Me!</button>
  `,
  styles: [
  ]
})
export class CommonButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
