package com.example.demo.rest;

import com.example.demo.dto.TaskDto;
import com.example.demo.entity.Task;
import com.example.demo.repository.TaskRepository;
import com.example.demo.service.TaskService;
import jakarta.validation.Valid;
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
    private final TaskService taskService;

    @GetMapping
    public List<TaskDto> findAll() {
        return taskService.findAll();
    }

    @GetMapping("/{id}")
    public TaskDto getTaskById(@PathVariable Long id) {
        return taskService.findTaskById(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public TaskDto addTask(@RequestBody @Valid TaskDto taskDto) {
        return taskService.addTask(taskDto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTaskById(@PathVariable Long id) {
        taskService.deleteTaskById(id);
    }

    /*
        If a controller method:
        returns a body
        does NOT throw an exception
        does NOT specify @ResponseStatus
        --> Spring automatically returns: 200 OK
     */
    @PutMapping("/{id}")
    public TaskDto updateTask(
            @PathVariable Long id,
            @RequestBody TaskDto updatedTask) {

        return  taskService.updateTask(updatedTask);
    }
}
