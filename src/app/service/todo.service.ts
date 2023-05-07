import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  serverUrl: string;

  constructor(private http: HttpClient) {
    this.serverUrl = 'http://localhost:3300/todo';
  }

  getAllTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.serverUrl);
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.serverUrl, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(this.serverUrl + '/' + todo.id, todo);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(this.serverUrl + '/' + todo.id);
  }
}
