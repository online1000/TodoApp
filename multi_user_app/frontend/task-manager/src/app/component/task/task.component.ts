import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";  // for ngIf, pipes and things like that
import {FormsModule} from "@angular/forms";   // for two-way databinding
import {TaskService} from "../../services/task.service";
import {Task} from "../../model/Task";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit{
  tasks: Task[] = [];         // a list of tasks, in initialized as empty list
  newTask: string = "";       // string variable to create a new task

  private router = inject(Router);

  constructor(private taskService: TaskService) {   // inject the task service for API calls

  }

  ngOnInit(): void {
    this.loadTasks();
  }

  public loadTasks() {

    // this.taskService.getTasks_mock().subscribe(
    this.taskService.getTasks().subscribe(
      {
        next: data => {
          console.log("retrieved " + data.length + " tasks")
          this.tasks = data;
        },

        error: error => {
          console.log("Error fetching tasks");
        }
      }
    );
  }

  // the method has to be public - which is the default
  // if we want to call it from the html template
  public addTask() {
    // empty string
    if (!this.newTask.trim())
      return

    // create a task object
    const task: Task = {
      title: this.newTask,
      completed: false
    }

    // handle return values, reset newTasks string and reload tasklist
    this.taskService.addTask(task).subscribe(
      {
        next: data => {
          this.newTask = "";
          this.loadTasks();
        },
        error: error => {
          console.log("Error when creating task")
        }
      }
    );
  }

  public deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(
      {
        next: data => {
          this.loadTasks();
        },
        error: data => {
          console.log("Error when deleting task")
        }
      }
    );
  }

  public toggleCompleted(task: Task) {
    const updatedTask: Task = {     // const is like finally in Java
      ...task,                      // take all value from task
      completed: !task.completed    // but modify the completed field
    };

    this.taskService.updateTask(updatedTask).subscribe(
      {
        next: data => {
          this.loadTasks();
        },
        error: data => {
          console.log("Error when updating task")
        }
      }
    );
  }

  editTask(taskId: number) {
    this.router.navigate(['/tasks/edit', taskId])
  }
}
