---
layout: default
title: "HardFOC MCP9700 Driver"
description: "Header-only MCP9700/MCP9700A linear thermistor driver with ESP32-C6 ADC example"
nav_order: 1
permalink: /
---

# HF-MCP9700 Driver

**Microchip MCP9700 / MCP9700A linear active thermistor — voltage to °C**

[![C++](https://img.shields.io/badge/C%2B%2B-17-blue.svg)](https://en.cppreference.com/w/cpp/17)
[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![CI](https://github.com/N3b3x/hf-mcp9700-driver/actions/workflows/esp32-examples-build-ci.yml/badge.svg?branch=main)](https://github.com/N3b3x/hf-mcp9700-driver/actions/workflows/esp32-examples-build-ci.yml)
[![Docs](https://img.shields.io/badge/docs-GitHub%20Pages-blue)](https://n3b3x.github.io/hf-mcp9700-driver/)

## Table of contents

1. [Overview](#overview)
2. [Features](#features)
3. [Quick start](#quick-start)
4. [Repository layout](#repository-layout)
5. [Documentation](#documentation)
6. [ESP32 examples](#esp32-examples)
7. [License](#license)

## Overview

The MCP9700 family outputs an analog voltage proportional to temperature. This repository provides a **header-only** C++17 template, `hf::mcp9700::Mcp9700Thermistor<AdcType>`, that converts ADC readings (volts) into degrees Celsius using the typical transfer function from the datasheet:

`T_C ≈ (Vout − 0.5 V) / (10 mV/°C)`

You supply a small **ADC adapter** type with `EnsureInitialized()` and `ReadChannelV(uint8_t channel, float* voltage_v)` returning **0** on success (aligned with HardFOC `hf_adc_err_t` and similar patterns).

## Features

- Header-only, no runtime library for the core driver
- Configurable 0 °C offset and V/°C slope (defaults match MCP9700/MCP9700A typical values)
- Version macro and `GetMcp9700DriverVersion()` string from CMake-generated header
- ESP-IDF **ESP32-C6** example using `adc_oneshot` + optional curve calibration on **ADC1 channel 0 (GPIO0)**

## Quick start

```cpp
#include "mcp9700_thermistor.hpp"

// Your platform must implement EnsureInitialized() and ReadChannelV(...)->int
struct MyAdc {
  bool EnsureInitialized() noexcept { return true; }
  int ReadChannelV(uint8_t ch, float* v) noexcept {
    if (!v || ch != 0) return 1;
    *v = measured_voltage_volts;
    return 0;
  }
};

MyAdc adc;
hf::mcp9700::Mcp9700Thermistor<MyAdc> mcp(&adc, 0);
if (mcp.Initialize()) {
  float t{};
  if (mcp.ReadTemperatureCelsius(&t)) {
    // use t
  }
}
```

## Repository layout

| Path | Purpose |
| --- | --- |
| `inc/` | Public headers (`mcp9700_thermistor.hpp`, generated `mcp9700_version.h`) |
| `src/` | Template implementation (`mcp9700_thermistor.ipp`) |
| `cmake/` | `hf_mcp9700_build_settings.cmake` for embedding in larger CMake trees |
| `docs/` | Markdown guides and Jekyll/Doxygen inputs |
| `examples/esp32/` | ESP-IDF project (ESP32-C6); **`scripts/` is a git submodule** |
| `_config/` | Doxygen, Jekyll, clang-format/tidy, CI doc tooling |

## Documentation

- [Documentation index](docs/index.md)
- [Hardware setup (ESP32-C6 ADC pin)](docs/hardware_setup.md)
- [CMake integration](docs/cmake_integration.md)

Live HTML (when published): [GitHub Pages](https://n3b3x.github.io/hf-mcp9700-driver/).

## ESP32 examples

Clone with submodules so `examples/esp32/scripts` (build/flash helpers) is present:

```bash
git clone --recursive https://github.com/N3b3x/hf-mcp9700-driver.git
# or, after a non-recursive clone:
git submodule update --init --recursive
```

Then:

```bash
cd examples/esp32
./scripts/build_app.sh list
./scripts/build_app.sh mcp9700_esp32c6_example Debug
./scripts/flash_app.sh mcp9700_esp32c6_example Debug
```

See [examples/esp32/README.md](examples/esp32/README.md) for `idf.py` usage and wiring.

## License

GPL-3.0 — see [LICENSE](LICENSE).
