let B = 0
let Y = 0
let X = 0
led.enable(false)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 430) {
        led.enable(true)
        basic.showArrow(ArrowNames.East)
    } else {
        led.enable(false)
    }
    if (pins.analogReadPin(AnalogPin.P1) < 400) {
        led.enable(true)
        basic.showArrow(ArrowNames.West)
    } else {
        led.enable(false)
    }
    if (pins.analogReadPin(AnalogPin.P0) > 430) {
        led.enable(true)
        basic.showArrow(ArrowNames.North)
    } else {
        led.enable(false)
    }
    if (pins.analogReadPin(AnalogPin.P0) < 400) {
        led.enable(true)
        basic.showArrow(ArrowNames.South)
    } else {
        led.enable(false)
    }
    if (pins.analogReadPin(AnalogPin.P1) > 750 && pins.analogReadPin(AnalogPin.P0) > 750) {
        led.enable(true)
        basic.showArrow(ArrowNames.NorthEast)
    } else {
        led.enable(false)
    }
    X = pins.analogReadPin(AnalogPin.P1)
    Y = pins.analogReadPin(AnalogPin.P0)
    B = pins.analogReadPin(AnalogPin.P2)
    serial.writeValue("X", X)
    serial.writeValue("Y", Y)
    serial.writeValue("B", B)
    basic.pause(100)
})
