import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import {
  selectError,
  selectLoading,
  selectTodos,
} from '../../store/todo.selectors';
import { loadTodos } from '../../store/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  todos$: Observable<Todo[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectTodos);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }
  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }
}
