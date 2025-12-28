import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Task} from "../../model/Task";
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {

    console.log("CONSTRUCTOR EditTaskComponent")
  }

  editTaskForm: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required),
    completed: new FormControl(false)
  });

  private taskId!: number;   // stored so we can send it back with the updated task

  ngOnInit() {
    const idString = this.route.snapshot.paramMap.get('id');
    if(!idString) return;

    this.taskId = Number(idString);  // we store the id so we can later send it back with the updated task
    this.loadTask(this.taskId);
  }

  // I should only need to subscribe when I am navigating withing the component
  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params => {
  //     console.log("calling ngOnInit() for edit-task")
  //
  //     const idString = params.get('id');
  //     if (!idString) return;
  //
  //     const id = Number(idString);
  //     if (Number.isNaN(id)) return;
  //
  //     this.loadTask(id);
  //   });
  // }
  //
  private loadTask(id: number) {
    this.taskService.findTaskById(id).subscribe({
      next: task => this.fillForm(task),
      error: data => console.log("Error when retrieving task")
    });
  }

  private fillForm(task: Task) {
    console.log("retrieved task ", task);
    this.editTaskForm.patchValue(
      {
        title: task.title,
        completed: task.completed
      }
    )
  }

  handleSubmit() {
    if (this.editTaskForm.invalid) {
      return;
    }

    // keep the id that we stored when loading the component
    // and get the rest of the information from the form
    const updatedTask: Task = {
      id: this.taskId,
      ...this.editTaskForm.value
    };

    console.log('Submitting task: ', updatedTask)
  }
}
