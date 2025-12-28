package com.example.demo.service;

import com.example.demo.dto.TaskDto;

import java.util.List;

public interface TaskService {

    /*
        Returns all tasks stored in the persistent data store
    */
    List<TaskDto> findAll();

    /*
    retrieves a stored task by the id
     */
    TaskDto findTaskById(Long id);

    /*
       Saves a new task in persistent data storage
    */
    TaskDto addTask(TaskDto task);

    /*
    *deletes an existing task
    * @throws NotFoundException if the task with this id was not found
    */
    void deleteTaskById(Long id);

    /*
        updates an existing task
    */
    TaskDto updateTask(TaskDto updatedTask);
}
