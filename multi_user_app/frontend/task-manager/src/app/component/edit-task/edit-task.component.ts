import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent {

  editTaskForm: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required),
    completed: new FormControl(false)
  });

  handleSubmit() {
    if (this.editTaskForm.invalid) {
      return;
    }

    const newTask: Task = this.editTaskForm.value;

    console.log('Submitting task: ', newTask)
  }
}
