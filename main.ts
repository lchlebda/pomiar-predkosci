let pomiar = false
let dźwięk = 0
let start = 0
let end = 0
input.onButtonPressed(Button.A, function () {
    pomiar = true
    dźwięk = 255
    start = 0
    while (pomiar) {
        serial.writeValue("x", input.soundLevel())
        if (input.soundLevel() > 150 && start == 0) {
            start = input.runningTimeMicros()
            dźwięk = input.soundLevel()
        } else {
            if (start != 0) {
                if (input.soundLevel() <= dźwięk) {
                    dźwięk = input.soundLevel()
                } else {
                    end = input.runningTimeMicros()
                    pomiar = false
                }
            }
        }
    }
    basic.showNumber(1500000 / (end - start))
    basic.showString("m/s")
})
basic.forever(function () {
	
})
