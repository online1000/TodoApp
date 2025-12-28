import { Routes } from '@angular/router';
import {TaskComponent} from "./component/task/task.component";
import {EditTaskComponent} from "./component/edit-task/edit-task.component";

export const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  { path: 'tasks', component: TaskComponent },
  { path: 'tasks/edit', component: EditTaskComponent }
];



