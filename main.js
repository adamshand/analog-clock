// document.getElementById('loading').style.visibility="hidden";
function setTime() {
  d = new Date()

  hour = d.getHours()
  hDeg = ((hour % 12) + d.getMinutes() / 60) * 30
  mDeg = (d.getMinutes() / 60) * 360
  sDeg = (d.getSeconds() / 60) * 360

  // hDeg = 30
  // mDeg = 30
  // sDeg = 30
  moveHand('hour', hDeg)
  moveHand('minute', mDeg)
  moveHand('second', sDeg)
  moveHand('tail', sDeg)

  // hour = 7
  document.getElementById(
    'background'
  ).style.backgroundImage = `url(images/${hour}.jpg)`

  setTimeout(function () {
    setTime()
  }, 1000)
}

function moveHand(id, deg) {
  document
    .getElementById(id)
    .setAttribute('transform', `rotate(${deg},250,250)`)
}

// window.onload = start()
window.onload = setTime()
