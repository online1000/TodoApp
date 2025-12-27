package com.example.demo.rest;

import com.example.demo.entity.Task;
import com.example.demo.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
public class TaskController {
    private final TaskRepository taskRepository;

    @GetMapping
    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Task addTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTaskById(@PathVariable Long id) {
        taskRepository.deleteById(id);
    }

    /*
        If a controller method:
        returns a body
        does NOT throw an exception
        does NOT specify @ResponseStatus
        --> Spring automatically returns:
     */
    @PutMapping("/{id}")
    public Task updateTask(
            @PathVariable Long id,
            @RequestBody Task updatedTask) {

        Task task = taskRepository.findById(id)  // orElseThrow expects a function that returns an exception
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        task.setTitle(updatedTask.getTitle());
        task.setCompleted(updatedTask.getCompleted());

        return taskRepository.save(task);
    }
}
