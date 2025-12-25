# add task and delete method


**task.component.ts**
```ts
  // the method has to be public - which is the default
  // if we want to call it from the html template
public addTask() {
    // empty string
    if (!this.newTask.trim())
        return

    // create a task object
    const task: Task = {
        title: this.newTask
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
```

**task.component.ts**  
```ts
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
```