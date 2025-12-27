package com.example.demo.dto;

import jakarta.validation.constraints.NotBlank;

public record TaskDto(
Long id,

@NotBlank
String title,

boolean completed
) {
}
