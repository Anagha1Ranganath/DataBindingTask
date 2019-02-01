import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child4',
  template: `<h2>{{"Hello" + parentData}}</h2>
            <button (click) = "fireEvent()"> Send event </button>`,
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {

  @Input() public parentData;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('Hey Guest!');
  }

}
