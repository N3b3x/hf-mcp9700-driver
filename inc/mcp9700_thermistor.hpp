#pragma once

#include <cstdint>

namespace hf {
namespace mcp9700 {

template <typename AdcType>
class Mcp9700Thermistor {
public:
    Mcp9700Thermistor(AdcType* adc_interface, uint8_t adc_channel) noexcept;
    ~Mcp9700Thermistor() noexcept = default;

    bool Initialize() noexcept;
    bool Deinitialize() noexcept;
    bool ReadTemperatureCelsius(float* temperature_celsius) noexcept;

private:
    AdcType* adc_interface_;
    uint8_t adc_channel_;
    bool initialized_;
};

} // namespace mcp9700
} // namespace hf

// Include template implementation
#include "../src/mcp9700_thermistor.ipp"
