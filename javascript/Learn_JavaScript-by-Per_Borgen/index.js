// -----------------------------------------------------------------------------
// STATE: Holds all mutable application data. No DOM references.
// -----------------------------------------------------------------------------

// 1. Application state ()
let homeScore = 0;
let guestScore = 0;
let gameTimeSeconds = 0
let timerRunning = false
let timerIntervalId = null

// -----------------------------------------------------------------------------
// DOM: Only element lookups. No logic.
// -----------------------------------------------------------------------------

// 2. Cache DOM elements:
// Displays
const homeScoreEl = document.getElementById("home-points")
const guestScoreEl = document.getElementById("guest-points")
const timerEl = document.getElementById("game-timer")
// Buttons
const homeButtons = document.querySelectorAll("#home-points-row button")
const guestButtons = document.querySelectorAll("#guest-points-row button")
const startBtn = document.getElementById("start-stop-btn")
const resetBtn = document.getElementById("reset-btn")

// 3. Render function (UI only)
function render() {
  homeScoreEl.textContent = homeScore
  guestScoreEl.textContent = guestScore
  timerEl.textContent = formatTime(gameTimeSeconds)
}
// Formatting helper (UI only):
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
}

// -----------------------------------------------------------------------------
// LOGIC: Pure state mutation and timer behavior. No DOM manipulation
// -----------------------------------------------------------------------------

// 4. Update function (logic only: udate score based on team + points)
function updateScore(team, points) {
  if (team === "home") {
    homeScore += points
  } else {
    guestScore += points
  }
}

// Update function for Controls panel
// Reset (pure logic)
function resetGame() {
  homeScore = 0
  guestScore = 0
  gameTimeSeconds = 0
  stopTimer()
}

// Timer logic (pure logic)
function startTimer() {
  if (timerRunning) return
  timerRunning = true
  timerIntervalId = setInterval(() => {
    gameTimeSeconds++
    render()
  }, 1000)
}

function stopTimer() {
  timerRunning = false
  clearInterval(timerIntervalId)
  timerIntervalId = null
}

function updateStartStopLabel() {
  startBtn.textContent = timerRunning ? "STOP" : "START"
}

   
// -----------------------------------------------------------------------------
// PRESENTATION: Event wiring only. No calculations. No state definitions.
// -----------------------------------------------------------------------------

// 5. Wire HOME buttons
homeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const points = Number(button.dataset.points)
    updateScore("home", points)
    render()
  })
})

// 6. Wire GUEST buttons
guestButtons.forEach(button => {
  button.addEventListener("click", () => {
    const points = Number(button.dataset.points)
    updateScore("guest", points)
    render()
  })
})
  
// Start, Stop, Reset Event Handlers/Listeners
startBtn.addEventListener("click", () => {
  if (timerRunning) stopTimer()
  else startTimer()

  updateStartStopLabel()
})

resetBtn.addEventListener("click", () => {
  resetGame()
  render()
  updateStartStopLabel()
})


// 7. Initial render
render()


