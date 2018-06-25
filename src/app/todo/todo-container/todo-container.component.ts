import { Component, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TodoItem, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todos: Observable<TodoItem[]>;
  filterChange = new EventEmitter<string>();
  total: Observable<number>;
  completed: Observable<number>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    const filter$ = this.filterChange.pipe(startWith(''));

    // result of todo with filtered content
    this.todos = this.todoService.getFilterableTodos(filter$);
    this.total = this.todoService.getTodos().pipe(map(todos => todos.length));
    this.completed = this.todoService
      .getTodos()
      .pipe(map(todos => todos.filter(todo => todo.completed).length));
  }

  addNewTodo(todo: string) {
    this.todoService.addTodo(todo);
  }

  toggleTodo(todo: TodoItem) {
    this.todoService.toggleTodo(todo);
  }

  removeTodo(todo: TodoItem) {
    this.todoService.removeTodo(todo);
  }
}
