import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import * as uuid from 'uuid/v1';

export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos$ = new BehaviorSubject<TodoItem[]>([]);

  getTodos(): Observable<TodoItem[]> {
    return this.todos$.asObservable();
  }

  getFilterableTodos(filter$: Observable<string>): Observable<TodoItem[]> {
    return combineLatest(this.getTodos(), filter$, (todos, filter) =>
      todos.filter(todo => todo.title.indexOf(filter) !== -1)
    );
  }

  addTodo(title: string) {
    // generate complete todo item
    const todo = {
      id: uuid(),
      title,
      completed: false
    };

    // append to the list
    this.todos$.next([...this.todos$.value, todo]);
  }

  toggleTodo(todo: TodoItem) {
    // change completed value
    const todos = this.todos$.value.map(
      item => (item.id === todo.id ? { ...item, completed: !todo.completed } : item)
    );

    this.todos$.next(todos);
  }

  removeTodo(todo: TodoItem) {
    const todos = this.todos$.value.filter(item => item.id !== todo.id);

    this.todos$.next(todos);
  }
}
