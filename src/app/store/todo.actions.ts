import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const loadTodos = createAction('[Todo] Load Todo');

export const loadTodosSuccess = createAction(
  '[Todo] Load Todo Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todo Failure',
  props<{ error: string }>()
);
