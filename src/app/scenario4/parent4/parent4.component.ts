import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.css']
})
export class Parent4Component implements OnInit {

  title = 'App';

  public parentName = 'Anagha';

  public message = '';

  constructor() { }

  ngOnInit() {
  }

}
