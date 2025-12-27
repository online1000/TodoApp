package com.example.demo.service.impl;

import com.example.demo.dto.TaskDto;
import com.example.demo.entity.Task;
import com.example.demo.exception.NotFoundException;
import com.example.demo.exception.ValidationException;
import com.example.demo.mapper.TaskMapper;
import com.example.demo.repository.TaskRepository;
import com.example.demo.service.TaskService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;
    private TaskMapper taskMapper;

    @Override
    public List<TaskDto> findAll() {
        List<Task> tasks = taskRepository.findAll();
        return taskMapper.toDtoList(tasks);
    }

    @Override
    public TaskDto addTask(TaskDto task) {
        Task savedTask = taskRepository.save(taskMapper.toEntity(task));
        return taskMapper.toDto(savedTask);
    }

    @Transactional
    @Override
    public void deleteTaskById(Long id) {
        taskRepository.findById(id).orElseThrow(() -> new NotFoundException("Task to delete not found"));
        taskRepository.deleteById(id);
    }

    @Transactional
    @Override
    public TaskDto updateTask(TaskDto updatedTask) {
        if (updatedTask.id() == null) {
            List<String> validationErrors = new ArrayList<>();
            validationErrors.add("Task to update needs an Id");
            throw new ValidationException("No ID given", validationErrors);
        }

        Task existingTask = taskRepository.findById(updatedTask.id())
                .orElseThrow(() -> new NotFoundException("task to update not found"));

        existingTask.setTitle(updatedTask.title());
        existingTask.setCompleted(updatedTask.completed());
        Task saved = taskRepository.save(existingTask);

        return taskMapper.toDto(saved);
    }
}
