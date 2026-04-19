# Examples

## ESP32-C6 (`examples/esp32`)

Application: `mcp9700_esp32c6_example`

- Uses `esp_adc` oneshot driver and optional calibration.
- Reads MCP9700 Vout on **GPIO0 / ADC1 CH0** by default.
- Prints temperature every 500 ms.

Initialize the `scripts` submodule before using `build_app.sh`:

```bash
git submodule update --init --recursive
cd examples/esp32
./scripts/build_app.sh mcp9700_esp32c6_example Debug
```

See [examples/esp32/README.md](../examples/esp32/README.md).
