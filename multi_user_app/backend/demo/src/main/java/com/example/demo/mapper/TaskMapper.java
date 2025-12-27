package com.example.demo.mapper;

import com.example.demo.dto.TaskDto;
import com.example.demo.entity.Task;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TaskMapper {
    Task toEntity(TaskDto dto);

    TaskDto toDto(Task entity);

    List<TaskDto> toDtoList(List<Task> tasks);
}
