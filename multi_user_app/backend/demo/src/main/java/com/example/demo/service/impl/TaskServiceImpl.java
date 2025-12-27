package com.example.demo.service.impl;

import com.example.demo.dto.TaskDto;
import com.example.demo.service.TaskService;

import java.util.List;

public class TaskServiceImpl implements TaskService {
    @Override
    public List<TaskDto> findAll() {
        return List.of();
    }

    @Override
    public TaskDto addTask(TaskDto task) {
        return null;
    }

    @Override
    public void deleteTaskById(Long id) {

    }

    @Override
    public TaskDto updateTask(TaskDto updatedTask) {
        return null;
    }
}
