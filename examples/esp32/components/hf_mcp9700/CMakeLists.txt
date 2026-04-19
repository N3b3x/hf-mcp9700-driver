# hf_mcp9700 — ESP-IDF component wrapper (header-only driver)
set(HF_MCP9700_ROOT "${CMAKE_CURRENT_LIST_DIR}/../../../.." CACHE PATH
    "Path to hf-mcp9700-driver root")

get_filename_component(HF_MCP9700_ROOT "${HF_MCP9700_ROOT}" ABSOLUTE)
if(NOT EXISTS "${HF_MCP9700_ROOT}/cmake/hf_mcp9700_build_settings.cmake")
    message(FATAL_ERROR
        "Cannot find MCP9700 driver root at ${HF_MCP9700_ROOT}")
endif()

include("${HF_MCP9700_ROOT}/cmake/hf_mcp9700_build_settings.cmake")

idf_component_register(
    INCLUDE_DIRS ${HF_MCP9700_PUBLIC_INCLUDE_DIRS}
    REQUIRES ${HF_MCP9700_IDF_REQUIRES}
)

target_compile_features(${COMPONENT_LIB} INTERFACE cxx_std_17)
