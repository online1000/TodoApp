import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";  // for ngIf, pipes and things like that
import {FormsModule} from "@angular/forms";   // for two-way databinding
import {TaskService} from "../../services/task.service";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit{
  tasks: Task[] = [];         // a list of tasks, in initialized as empty list
  newTask: String = "";       // string variable to create a new task

  constructor(private taskService: TaskService) {   // inject the task service for API calls

  }

  ngOnInit(): void {
    this.loadTasks();
  }

  private loadTasks() {
    this.taskService.getTasks().subscribe(
      {
        next: data => {
          console.log("retrieved " + data.length + "tasks")
          this.tasks = data;
        },

        error: error => {
          console.log("Error fetching tasks");
        }
      }
    );
  }
}
