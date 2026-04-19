#pragma once

namespace hf {
namespace mcp9700 {

template <typename AdcType>
Mcp9700Thermistor<AdcType>::Mcp9700Thermistor(AdcType* adc_interface, uint8_t adc_channel) noexcept
    : adc_interface_(adc_interface), adc_channel_(adc_channel), initialized_(false) {
}

template <typename AdcType>
bool Mcp9700Thermistor<AdcType>::Initialize() noexcept {
    if (!adc_interface_) {
        return false;
    }
    initialized_ = adc_interface_->EnsureInitialized();
    return initialized_;
}

template <typename AdcType>
bool Mcp9700Thermistor<AdcType>::Deinitialize() noexcept {
    initialized_ = false;
    return true;
}

template <typename AdcType>
bool Mcp9700Thermistor<AdcType>::ReadTemperatureCelsius(float* temperature_celsius) noexcept {
    if (!initialized_ || !adc_interface_ || !temperature_celsius) {
        return false;
    }
    float voltage_v = 0.0f;
    // We assume AdcType returns 0 on success, or an enum where 0 is Success
    auto err = adc_interface_->ReadChannelV(adc_channel_, &voltage_v);
    if (static_cast<int>(err) != 0) {
        return false;
    }

    // T_A = (V_out - 0.5) / 0.01
    *temperature_celsius = (voltage_v - 0.5f) / 0.01f;
    return true;
}

} // namespace mcp9700
} // namespace hf
