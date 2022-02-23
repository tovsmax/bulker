// Timer panel

// Timer

const timeCounter = document.querySelector('.timeCounter')
const timerBtn = document.querySelector('.timerBtn')
const timeTimerInput = document.querySelector('.timeTimer')

const TWHit = new Audio('audio/typewriter-hit.mp3')
TWHit.volume = 0.5
const boom = new Audio('audio/boom.mp3')
boom.volume = 0.5

function changeTimer() {
  const curTimeStr = timeCounter.innerHTML
  const curTime = 
    parseInt(curTimeStr.split(':')[1]) 
    + parseInt(60*curTimeStr.split(':')[0])

  const changingSec = timeCounter.classList.contains('increase')
    ? 1
    : -1

  const newTime = Math.abs(curTime + changingSec)
  if (newTime === 10) { timeCounter.classList.add('alarm') }
  if (changingSec < 0 && newTime <= 10 && newTime > 0) { TWHit.play() }
  if (newTime === 0) {
    boom.play()
    timeCounter.classList.remove('decrease')
    timeCounter.classList.remove('lastMin')
    timeCounter.classList.add('increase')
  }
  
  const min = Math.floor(newTime/60)
  const sec = newTime%60

  timeCounter.innerHTML = 
    (min > 9 ? min : ('0' + min)) 
    + ":" + 
    (sec > 9 ? sec : ('0' + sec))
}

let timerInterval
function startTimer() {
  freezeBtn.disabled = false
  clearInterval(timerInterval)
  clearInterval(freezeInterval)
  freezeBtn.innerHTML = 'Заморозить'
  freezeBtn.onclick = freeze

  timeCounter.classList.add('decrease')
  const timeTimerValue = timeTimerInput.value
  timeCounter.innerHTML = timeTimerValue > 9
    ? (timeTimerValue+':00')
    : ('0' + timeTimerValue+':00')

  timerInterval = setInterval(changeTimer, 1000)

  timerBtn.innerHTML = 'Сброс'
  timerBtn.onclick = () => {
    endTimer()
  }
}

function endTimer() {
  freezeBtn.disabled = true
  clearInterval(timerInterval)
  clearInterval(freezeInterval)
  timeCounter.className = 'timeCounter'
  timeCounter.innerHTML = '00:00'

  timerBtn.innerHTML = 'Запуск'
  timerBtn.onclick = () => {
    startTimer()
  }
}

timerBtn.onclick = () => {
  startTimer()
}

// Freeze

const freezeBtn = document.querySelector('.freezeBtn')
const timeFreezeInput = document.querySelector('.timeFreeze')


let freezeInterval 
function changeFreeze() {
  const curTimeStr = timeCounter.innerHTML
  const curTime = 
    parseInt(curTimeStr.split(':')[1]) 
    + parseInt(60*curTimeStr.split(':')[0])
  
  const newTime = curTime - 1
  if (newTime === 0) {
    unfreeze()
    return
  }
  const min = Math.floor(newTime/60)
  const sec = newTime%60

  timeCounter.innerHTML = 
    (min > 9 ? min : ('0' + min)) 
    + ":" + 
    (sec > 9 ? sec : ('0' + sec))
}


let timerTime
function freeze() {
  timeCounter.classList.add('freeze')
  timerTime = timeCounter.innerHTML
  const timeFreezeValue = timeFreezeInput.value
  timeCounter.innerHTML = timeFreezeValue > 9
    ? (timeFreezeValue+':00')
    : ('0' + timeFreezeValue+':00')

  clearInterval(timerInterval)
  clearInterval(freezeInterval)
  freezeInterval = setInterval(changeFreeze, 1000)

  freezeBtn.innerHTML = 'Разморозить'
  freezeBtn.onclick = unfreeze
}

function unfreeze() {
  timeCounter.classList.remove('freeze')
  timeCounter.innerHTML = timerTime

  clearInterval(timerInterval)
  clearInterval(freezeInterval)
  timerInterval = setInterval(changeTimer, 1000)

  freezeBtn.innerHTML = 'Заморозить'
  freezeBtn.onclick = freeze
}

freezeBtn.onclick = freeze

// Main button actions and timer activation on next turn

const mainBtn = document.querySelector('.mainBtn')
const autoTimerCheckbox = document.querySelector('.autoTimerCheckbox')

function changeMainBtn() {
  mainBtn.innerHTML = 'Следующий ход'
  mainBtn.onclick = () => {
    nextTurn()

    if (timerInterval) { endTimer() }
    if (autoTimerCheckbox.checked) {
      startTimer()
    }
  }
}

mainBtn.onclick = () => {
  changeMainBtn()
  fillData()
  addGeneralTableInteractions()
}

mainBtn.click()

// Export
// import { exportGame } from "./export.js";
const exportBtn = document.querySelector('.exportBtn')
exportBtn.onclick = () => {
  exportGame()
}