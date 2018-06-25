import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-status',
  templateUrl: './todo-status.component.html',
  styleUrls: ['./todo-status.component.css']
})
export class TodoStatusComponent implements OnInit {
  @Input() total = 0;
  @Input() completed = 0;

  constructor() {}

  ngOnInit() {}
}
