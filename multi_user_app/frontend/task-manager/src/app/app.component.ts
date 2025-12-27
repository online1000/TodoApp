import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TaskComponent} from "./component/task/task.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Task} from "./model/Task";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  newTask: string = "";
  tasks: string[] = [];

  addTask() {
    if (!this.newTask.trim()) {
      this.tasks = [...this.tasks, this.newTask]
    }
  }

  deleteTask(index: number) {
    this.tasks = this.tasks.filter((_, i) => i != index);
  }
}
