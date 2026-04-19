# Installation

## Requirements

- C++17 or newer
- CMake 3.16+ if you use the provided root `CMakeLists.txt`

## Header-only layout

Install or vendor the repository, then add the include paths:

1. `inc/` — public headers
2. Build directory containing generated `mcp9700_version.h` (from `mcp9700_version.h.in`)

The file `cmake/hf_mcp9700_build_settings.cmake` runs `configure_file` to emit `mcp9700_version.h` into `${CMAKE_CURRENT_BINARY_DIR}/hf_mcp9700_generated/` whenever it is included from a parent CMake project.

## Consume from CMake

See [CMake integration](cmake_integration.md).
