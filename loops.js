
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.splice(`I am 1 strange loop.`)
    } else {
      array.splice(`I am ${i} strange loops.`)
    }
  }
}
