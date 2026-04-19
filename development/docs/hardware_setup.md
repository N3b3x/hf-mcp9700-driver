# Hardware setup — ESP32-C6 (on-chip ADC)

## MCP9700 connections

| MCP9700 pin | Connection |
| --- | --- |
| Vdd | 3.3 V (same rail as ESP32-C6 IO / ADC reference context) |
| Vss | Ground |
| Vout | ADC input |

## ESP32-C6 ADC mapping (default example)

The stock ESP-IDF example uses:

- **ADC unit:** `ADC_UNIT_1`
- **Channel:** `ADC_CHANNEL_0`
- **GPIO:** **GPIO0** (verify in the ESP32-C6 TRM for your silicon — GPIO0 is ADC1 CH0 on ESP32-C6 in current IDF headers)

Attenuation is set to **12 dB** so the nominal **0–3.3 V** output range of the MCP9700 fits the measurable ADC range.

## Accuracy notes

- Use **adc_cali** curve fitting when available (enabled in the example when `ADC_CALI_SCHEME_CURVE_FITTING_SUPPORTED` is true).
- For production, measure offset and slope at known temperatures and pass custom `v_zero_c` / `v_per_c` to `Mcp9700Thermistor` if needed.
