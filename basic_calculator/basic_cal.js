// -----------------------------------------------------------------------------
// State (data used by the program)
// -----------------------------------------------------------------------------

// Store the two numbers used for all calculations
let num1 = 8
let num2 = 2

// -----------------------------------------------------------------------------
// Initial DOM rendering
// -----------------------------------------------------------------------------

// Render the initial values of num1 and num2 into the page
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// -----------------------------------------------------------------------------
// DOM references
// -----------------------------------------------------------------------------

// Cache DOM elements so we can interact with them from JavaScript
const addBtn = document.getElementById("add-btn")
const subtractBtn = document.getElementById("subtract-btn")
const divideBtn = document.getElementById("divide-btn")
const multiplyBtn = document.getElementById("multiply-btn")

const sumEl = document.getElementById("sum-el")

// -----------------------------------------------------------------------------
// Pure calculation functions
// -----------------------------------------------------------------------------

// These functions perform calculations only.
// They do not modify the DOM or change external state.
// Each function returns a value.

const add = () => num1 + num2
const subtract = () => num1 - num2
const divide = () => num1 / num2
const multiply = () => num1 * num2

// -----------------------------------------------------------------------------
// Event handlers (side effects)
// -----------------------------------------------------------------------------

// When a button is clicked:
// 1. The corresponding calculation function is executed
// 2. The returned value is rendered into the DOM

addBtn.addEventListener("click", () => {
  sumEl.textContent = "Sum: " + add()
})

subtractBtn.addEventListener("click", () => {
  sumEl.textContent = "Sum: " + subtract()
})

divideBtn.addEventListener("click", () => {
  sumEl.textContent = "Sum: " + divide()
})

multiplyBtn.addEventListener("click", () => {
  sumEl.textContent = "Sum: " + multiply()
})
