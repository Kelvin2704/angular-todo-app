import { createReducer, on } from '@ngrx/store';
import { loadTodos, loadTodosFailure, loadTodosSuccess} from './todo.actions';
import { Todo } from '../models/todo.model';

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

export const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = createReducer(
  initialState,
  on(loadTodos, (state) => ({ ...state, loading: true })),
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    loading: false,
    todos,
  })),
  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
