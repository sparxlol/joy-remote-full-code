enum RadioMessage {
    message1 = 49434,
    message2 = 1435,
    message3 = 31126,
    message4 = 29926,
    msg5 = 4123,
    msg9 = 3953
}
radio.onReceivedMessage(RadioMessage.message4, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 57)
})
radio.onReceivedMessage(RadioMessage.message3, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 57)
})
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.msg5)
})
input.onButtonPressed(Button.B, function () {
    Leds()
})
radio.onReceivedMessage(RadioMessage.msg9, function () {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
    moveMotorZIP.showRainbow(1, 360)
    moveMotorZIP.show()
})
function Leds () {
    radio.sendMessage(RadioMessage.msg9)
}
radio.onReceivedMessage(RadioMessage.msg5, function () {
    Kitronik_Move_Motor.stop()
})
radio.onReceivedMessage(RadioMessage.message2, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, 57)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 57)
})
let y = 0
let x = 0
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
radio.setGroup(1)
let threshold = 200
basic.forever(function () {
    x = pins.analogReadPin(AnalogPin.P3)
    y = pins.analogReadPin(AnalogPin.P4)
    if (x < 400) {
        radio.sendMessage(RadioMessage.message2)
        basic.pause(200)
    } else if (x > 600) {
        radio.sendMessage(RadioMessage.message3)
        basic.pause(200)
    }
    if (y < 400) {
        radio.sendMessage(RadioMessage.message1)
        basic.pause(200)
    } else if (y > 600) {
        radio.sendMessage(RadioMessage.message4)
        basic.pause(200)
    }
})
basic.forever(function () {
	
})
