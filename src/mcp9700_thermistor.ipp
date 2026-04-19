#pragma once

namespace hf {
namespace mcp9700 {

template <typename AdcType>
Mcp9700Thermistor<AdcType>::Mcp9700Thermistor(AdcType* adc_interface, uint8_t adc_channel,
                                                float v_zero_c, float v_per_c) noexcept
    : adc_interface_(adc_interface)
    , adc_channel_(adc_channel)
    , v_zero_c_(v_zero_c)
    , v_per_c_(v_per_c)
    , initialized_(false) {}

template <typename AdcType>
bool Mcp9700Thermistor<AdcType>::Initialize() noexcept {
    if (adc_interface_ == nullptr || v_per_c_ <= 0.0F) {
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
    if (!initialized_ || adc_interface_ == nullptr || temperature_celsius == nullptr) {
        return false;
    }
    float voltage_v = 0.0F;
    const int err = adc_interface_->ReadChannelV(adc_channel_, &voltage_v);
    if (err != 0) {
        return false;
    }
    *temperature_celsius = (voltage_v - v_zero_c_) / v_per_c_;
    return true;
}

} // namespace mcp9700
} // namespace hf
