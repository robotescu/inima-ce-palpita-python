luminozitate = 0
basic.show_icon(IconNames.HEART)

def on_forever():
    led.set_brightness(luminozitate)
basic.forever(on_forever)

def on_forever2():
    global luminozitate
    if luminozitate < 255:
        for index in range(5):
            luminozitate = luminozitate + 51
            basic.pause(200)
    if luminozitate == 255:
        for index2 in range(5):
            luminozitate = luminozitate - 51
            basic.pause(200)
basic.forever(on_forever2)
