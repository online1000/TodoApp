# Frontend Implementation

## Project initializaton
create the angular project
```bash
ng add @angular/material
```

go into **task-manager** directory
add templates from angular
```shell
ng add @angular/material
```
create the component
```shell
ng generate component component/task
```

create a service
```shell
ng generate component services/task
```

create a type Task in app/model
```ts
export interface Task {
    id?: number;
    title: string;
}
```

