let luminozitate = 0
basic.showIcon(IconNames.Heart)
basic.forever(function on_forever() {
    led.setBrightness(luminozitate)
})
basic.forever(function on_forever2() {
    
    if (luminozitate < 255) {
        for (let index = 0; index < 5; index++) {
            luminozitate = luminozitate + 51
            basic.pause(200)
        }
    }
    
    if (luminozitate == 255) {
        for (let index2 = 0; index2 < 5; index2++) {
            luminozitate = luminozitate - 51
            basic.pause(200)
        }
    }
    
})
