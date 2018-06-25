import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoStatusComponent } from './todo-status/todo-status.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgZorroAntdModule],
  declarations: [
    TodoInputComponent,
    TodoFilterComponent,
    TodoListComponent,
    TodoStatusComponent,
    TodoContainerComponent
  ],
  exports: [TodoContainerComponent]
})
export class TodoModule {}
