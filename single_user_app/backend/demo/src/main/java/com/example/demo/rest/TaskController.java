package com.example.demo.rest;

import com.example.demo.entity.Task;
import com.example.demo.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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
    public void deleteTaskById(@PathVariable Integer id) {
        taskRepository.deleteById(id);
    }
}
