let firstNameEl = document.getElementById('first')
let lastNameEl = document.getElementById('last')
let numOutputEl = document.getElementById('numOutput')
let txtOutputEl = document.getElementById('txtOutput')

let evilness = [
  'average', // 0
  'okay', // 1
  'decent', // 2
  'evil', // 3
  'good', // 4
  'a hero', // 5
  'very evil', // 6
  'a saint', // 7
  'our lord and savior', // 8
  'extremely evil' // 9
]
function removeChars() {
  firstNameEl.value = firstNameEl.value.replaceAll(/[^a-z]/gui,'')
  lastNameEl.value = lastNameEl.value.replaceAll(/[^a-z]/gui,'')
}
function calculate() {
  removeChars()
  let firstSum = lastSum = outputSum = failSafe = 0
  let first = firstNameEl.value
  let last = lastNameEl.value
  // console.log(first.codePointAt(0)-96);
  ;[...first.toLowerCase()].forEach((item, i) => {
    firstSum += item.codePointAt(0) - 96
  });
  ;[...last.toLowerCase()].forEach((item, i) => {
    lastSum += item.codePointAt(0) - 96
  });
  let output = Math.abs(firstSum - lastSum)
  // console.log(.length);
  while (`${output}`.length > 1 && failSafe < 10) {
    outputSum = 0;
    [...`${output}`].forEach((item, i) => {
      // console.log(item);
      outputSum += +item
    });
    // console.log(output);
    output = outputSum
    // failSafe++
  }
  numOutputEl.innerHTML = `
  ${(firstSum > lastSum ?
    `${firstSum} - ${lastSum}` :
    `${lastSum} - ${firstSum}`
  )} = ${Math.abs(firstSum - lastSum)} = ${output}`
  txtOutputEl.innerHTML = `${first} ${last} is <span style="color:${color(output)}">${evilness[output]}</span>`
}
calculate()


function color (num) {
  let percent = [6, 5, 4, 8, 3, 2, 9, 1, 0, 10][num] / 10
  // console.log(percent);
  let red = (255 * percent)
  let green = 255 - red
  console.log(`${percent} %c${red} ${green} 0`,`color:rgb(${red},${green},0)`);
  return `rgb(${red},${green},0)`
}
