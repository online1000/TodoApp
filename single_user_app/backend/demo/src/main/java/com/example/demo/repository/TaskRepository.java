package com.example.demo.repository;

import com.example.demo.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

/*
getList<Taks>
save Task
delete Task
update Task

we get all this basic crud functionality from the repository without having to implement it
 */
public interface TaskRepository extends JpaRepository<Task, Long> {
}
