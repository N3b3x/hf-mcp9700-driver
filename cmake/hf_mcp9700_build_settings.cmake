#===============================================================================
# MCP9700 Driver - Build Settings
# Shared variables for target name, includes, sources, and dependencies.
# Single source of truth for the driver version.
#===============================================================================

include_guard(GLOBAL)

set(HF_MCP9700_TARGET_NAME "hf_mcp9700")

#===============================================================================
# Versioning
#===============================================================================
set(HF_MCP9700_VERSION_MAJOR 1)
set(HF_MCP9700_VERSION_MINOR 0)
set(HF_MCP9700_VERSION_PATCH 0)
set(HF_MCP9700_VERSION "${HF_MCP9700_VERSION_MAJOR}.${HF_MCP9700_VERSION_MINOR}.${HF_MCP9700_VERSION_PATCH}")
set(HF_MCP9700_VERSION_STRING "${HF_MCP9700_VERSION}")

#===============================================================================
# Generated version header (build tree)
#===============================================================================
set(HF_MCP9700_VERSION_TEMPLATE "${CMAKE_CURRENT_LIST_DIR}/../inc/mcp9700_version.h.in")
set(HF_MCP9700_VERSION_HEADER_DIR "${CMAKE_CURRENT_BINARY_DIR}/hf_mcp9700_generated")
set(HF_MCP9700_VERSION_HEADER     "${HF_MCP9700_VERSION_HEADER_DIR}/mcp9700_version.h")

file(MAKE_DIRECTORY "${HF_MCP9700_VERSION_HEADER_DIR}")

if(EXISTS "${HF_MCP9700_VERSION_TEMPLATE}")
    configure_file(
        "${HF_MCP9700_VERSION_TEMPLATE}"
        "${HF_MCP9700_VERSION_HEADER}"
        @ONLY
    )
    message(STATUS "MCP9700 driver v${HF_MCP9700_VERSION} — generated mcp9700_version.h in ${HF_MCP9700_VERSION_HEADER_DIR}")
else()
    message(WARNING "mcp9700_version.h.in not found at ${HF_MCP9700_VERSION_TEMPLATE}")
endif()

#===============================================================================
# Public include directories
#===============================================================================
set(HF_MCP9700_PUBLIC_INCLUDE_DIRS
    "${CMAKE_CURRENT_LIST_DIR}/../inc"
    "${HF_MCP9700_VERSION_HEADER_DIR}"
)

#===============================================================================
# Source files (header-only driver)
#===============================================================================
set(HF_MCP9700_SOURCE_FILES "")

#===============================================================================
# ESP-IDF component dependencies (header-only wrapper)
#===============================================================================
set(HF_MCP9700_IDF_REQUIRES driver)
