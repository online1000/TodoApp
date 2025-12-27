import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "../model/Task";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/tasks"

  constructor() { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Array<Task>>(this.apiUrl);
  }

  getTasks_mock(): Observable<Task[]> {
    const mockTasks: Task[] = [
      { id: 1, title: 'mock-task: Buy milk', completed: false },
      { id: 2, title: 'mock-task: Learn Angular', completed: true },
      { id: 3, title: 'mock-task: Refactor backend', completed: false }
    ];

    return of(mockTasks);
  }


  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    )
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.put<Task>(url, task);
  }
}
