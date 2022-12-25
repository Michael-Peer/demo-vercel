import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, throwError } from 'rxjs';
import { Todo } from '../shared/interfaces/todo';
import { StorageService } from '../services/storage.service';
import { pipe, map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  URL = 'https://jsonplaceholder.typicode.com/todos?userId=1';
  TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient, private storageService: StorageService) { }

  getTodos(limit?: number, shouldHideCompleted : boolean = false): Observable<Todo[]> {
    const todos = this.storageService.getFromStorage('todos')
    if(todos.length) {



      return new Observable((observer) => {
        observer.next(this.handleFilter(todos, shouldHideCompleted, limit))
      })
    }


    return this.http.get<Todo[]>(this.URL + (limit ? `&_limit=${limit}` : ''))
    .pipe(
      tap((todos) => {
        this.storageService.saveToStorage('todos', todos)
      })
    )
  }

  handleFilter(todos: Todo[], shouldHideCompleted: boolean, limit: number = 1000) {
    return todos.filter((todo, idx) => {
      if(shouldHideCompleted && limit) {
        return !todo.completed && idx < limit
      } else if (shouldHideCompleted) {
        return !todo.completed
      } else if (limit) {
        return idx < limit
      } else {
        return true
      }
    } )
  }

  hideCompletedTodos(todos: Todo[]) {
    return todos.filter((todo) => !todo.completed)
  }

addNewTodo(todo: Todo) {
  const todos = this.storageService.getFromStorage('todos')
  todos.push(todo)
  this.storageService.saveToStorage('todos', todos)
}

  getTodoById(id: number): Observable<Todo> {
     return this.http.get<Todo>(`${this.TODO_URL}/${id}`)
     .pipe()
  }

  updateStatus(todo: Todo): Todo {

        const todos = this.storageService.getFromStorage('todos')
        const idx = todos.findIndex((t) => t.id === todo.id)
        todos[idx] = todo

        this.storageService.saveToStorage('todos', todos)
        return todo

  }
}
