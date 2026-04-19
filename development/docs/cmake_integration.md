# CMake integration

## Embedded in a larger project (HardFOC pattern)

```cmake
include("${CMAKE_SOURCE_DIR}/path/to/hf-mcp9700-driver/cmake/hf_mcp9700_build_settings.cmake")
target_include_directories(my_target PRIVATE ${HF_MCP9700_PUBLIC_INCLUDE_DIRS})
```

`HF_MCP9700_PUBLIC_INCLUDE_DIRS` contains:

- The `inc/` directory
- The generated headers directory (`mcp9700_version.h`)

## Standalone interface library

From the driver root:

```bash
cmake -S . -B build
cmake --build build
```

This exposes target `hf_mcp9700` (and alias `hf::mcp9700`) as an `INTERFACE` library.
