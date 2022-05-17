// document.getElementById('loading').style.visibility="hidden";
'use strict'
const url = window.location.href

function setTime() {
  let rgb = []

  const d = new Date()

  let day = d.getDay() // day of week
  let hour = d.getHours()
  let minute = d.getMinutes()
  let second = d.getSeconds()

  // 'hour % 12' is more correct, but not needed as it just rotates extra 360 deg
  let hDeg = (minute / 60 + hour) * 30
  let mDeg = (minute / 60) * 360
  let sDeg = (second / 60) * 360

  // generate rgb codes (0-255) from day, hour, minute, and second
  rgb.push(day * (255 / 7))
  rgb.push(hour * (255 / 24))
  rgb.push(minute * (255 / 60))
  // let opacity = second * (0.7 / 60) + 0.3
  let opacity = second * (1 / 60)

  // assign rgb values randomly to red, green, blue
  let redIndex = second % 3
  let greenIndex = (redIndex + 1) % 3
  let blueIndex = (greenIndex + 1) % 3

  let red = rgb[redIndex]
  let green = rgb[greenIndex]
  let blue = rgb[blueIndex]

  background = document.getElementById('background')
  // background.style.backgroundImage = `url(images/${hour}.jpg)`
  background.style.backgroundColor = `rgb(${red},${green},${blue},${opacity})`
  debug({
    redIndex,
    greenIndex,
    blueIndex,
    day,
    hour,
    minute,
    second,
    red,
    green,
    blue,
    opacity,
  })

  // hDeg = 30; mDeg = 30; sDeg = 30
  moveHand('hour', hDeg)
  moveHand('minute', mDeg)
  moveHand('second', sDeg)
  moveHand('tail', sDeg)

  //  hour = 8

  setTimeout(function () {
    setTime()
  }, 1000)
}

function moveHand(id, deg) {
  document
    .getElementById(id)
    .setAttribute('transform', `rotate(${deg},250,250)`)
}

function debug(string) {
  let debugOn = url.split(':')[0] == 'file' ? true : false
  debugOn = false
  if (debugOn) {
    string && console.info(string)
    //console.log({ name, date, street})
  }
}

// window.onload = start()
window.onload = setTime()
