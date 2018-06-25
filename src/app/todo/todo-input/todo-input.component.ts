import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  @Output() todoSubmit = new EventEmitter();

  form = new FormGroup({
    todo: new FormControl('', [Validators.required])
  });

  submit() {
    if (!this.form.valid) {
      return;
    }

    this.todoSubmit.emit(this.form.value.todo);

    this.form.reset();
  }
}
