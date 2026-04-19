# Quick start

1. Implement an ADC adapter with:
   - `bool EnsureInitialized() noexcept`
   - `int ReadChannelV(uint8_t channel, float* voltage_v) noexcept`  
     Return **0** on success (matches common “error enum with 0 = OK” patterns).

2. Instantiate `hf::mcp9700::Mcp9700Thermistor<YourAdc>` with a pointer to your adapter and a logical channel index.

3. Call `Initialize()`, then `ReadTemperatureCelsius(&t)`.

Optional constructor arguments override the default **0.5 V** at 0 °C and **10 mV/°C** slope if you calibrate or use a variant with different published coefficients.
