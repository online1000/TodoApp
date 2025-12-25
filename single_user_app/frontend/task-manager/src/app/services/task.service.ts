import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "../model/Task";
import {Observable} from "rxjs";

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

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    )
  }
}
