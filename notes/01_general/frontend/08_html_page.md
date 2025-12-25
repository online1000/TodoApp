# writing the html page
## install bootstrap css framework
```shell
npm install bootstrap
```

add css file in **angular.json**  
note: this adds bootstrap globally
```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "@angular/material/prebuilt-themes/pink-bluegrey.css",
  "src/styles.scss"
],
```

## show the todo items 

**task.component.html**
```html
<div class="container">
    <h2>Task Manager</h2>
    <input [(ngModel)]="newTask" placeholder="New Task">
    <button (click)="addTask()"> Add </button>

    <ul>
        @for (task of tasks; track task.id){
        <li>
            {{task.title}}
            <button (click)="deleteTask(task.id!)">delete</button>
        </li>
        }
    </ul>
</div>
```

### add TaskComponent to app.component

add TaskComponent in the import array of the html template
This also adds the import of TaskComponent on top
**app.component.ts**
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TaskComponent} from "./component/task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-manager';
}
```

