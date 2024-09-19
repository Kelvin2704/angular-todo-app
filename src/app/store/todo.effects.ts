import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTodos, loadTodosFailure, loadTodosSuccess } from './todo.actions';
import { TodoService } from '../services/todo.service';
import { catchError, map, of, switchMap } from 'rxjs';
@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}
  loadTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.todoService.getTodos().pipe(
          map((todos) => loadTodosSuccess({ todos })),
          catchError((error) => of(loadTodosFailure({ error })))
        )
      )
    )
  );
}
