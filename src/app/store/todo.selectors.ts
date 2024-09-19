import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectTodos = createSelector(
  selectTodoState,
  (state) => state.todos
);
export const selectLoading = createSelector(
  selectTodoState,
  (state) => state.loading
);
export const selectError = createSelector(
  selectTodoState,
  (state) => state.error
);
