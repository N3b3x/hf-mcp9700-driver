# Troubleshooting

## `mcp9700_version.h` not found

Run CMake so `hf_mcp9700_build_settings.cmake` can `configure_file` the version header, or add the generated include directory to your target.

## Temperature clearly wrong

- Confirm **attenuation** covers MCP9700 Vout (≈ 0.1–1.75 V over −40–125 °C at 3.3 V supply; still stay within ADC range).
- Enable **adc calibration** when supported.
- Verify **GPIO ↔ ADC channel** mapping for your chip variant.

## `ReadChannelV` always fails

Return **0** only on success. Non-zero values are treated as failure by `Mcp9700Thermistor`.
