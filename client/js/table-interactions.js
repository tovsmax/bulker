function removeContextMenu() {
  const oldCM = document.querySelector('.contextMenu')
  if (oldCM) {
    oldCM.remove()
  }
}

function createContextMenu(event, cardActionsDict) {
  removeContextMenu()
  
  const contextMenu = document.createElement('div')
  contextMenu.classList.add('contextMenu')

  for (const [cardActionName, cardActionFunc] of Object.entries(cardActionsDict)) {
    const newCMItem = document.createElement('div')
    newCMItem.innerHTML = cardActionName
    newCMItem.onclick = () => cardActionFunc(event.target)
    newCMItem.classList.add('cmItem')

    contextMenu.append(newCMItem)
  }  

  contextMenu.style.top  = event.y + 'px'
  contextMenu.style.left = event.x + 'px'
  
  const body = document.querySelector('body')
  body.appendChild(contextMenu)

  event.preventDefault()
  window.onclick = () => {
    contextMenu.remove()
    window.onclick = null
  }
}

/**
 * 
 * @param {HTMLElement} target - the charValue or textFitted HTMLElement
 * @returns {HTMLElement} the charValue HTMLElement
 */
function getCell(target) {
  if (target.className.includes('textFitted')) {
    return target.closest('.charValue')
  } else {
    return target
  }
}

function showTraitFunc(cell) {
  if (!cell.classList.contains('curPlr')) { return }

  cell.classList.add('clickable')
  pressTimer = setTimeout(() => {
    cell.classList.remove('clickable')
    cell.classList.add('shownValue') // возможно, это можно удалить
    cell.onmousedown = null
    cell.onmouseup = null

    nextTurn() // переход на следующий ход
  }, 300); // НЕ ЗАБЫВАТЬ МЕНЯТЬ ТАЙМНИ В СТИЛЯХ!!!
}

function addShowTraitAct() {
  const charValueList = document.querySelectorAll('.charValue')
  charValueList.forEach(charValue => {
    charValue.onmouseup = (e) => {
      if (e.button !== 0) {
        return
      }

      const cell = getCell(e.target)
      if (!cell.classList.contains('curPlr')) { return }

      clearTimeout(pressTimer)
      cell.classList.remove('clickable')
    }

    charValue.onmousedown = (e) => {
      removeContextMenu()
      if (e.button !== 0) { return }

      const cell = getCell(e.target)
      
      showTraitFunc(cell)
    }
  })
}

function votingFunc() {

}

function addVotingAct() {

}

function addRevotingAct() {

}

function addCM(selector, cardActionsDict) {
  const elemList = document.querySelectorAll(selector)
  elemList.forEach(elem => {
    elem.oncontextmenu = event => {
      createContextMenu(event, cardActionsDict)
    }
  })
}

function addCharValueCM() {
  addCM('.charValue', {
    'Скопировать хар-ку': null,
    'Раскрыть хар-ку': null,
    'Вылечить': null,
    'Изменить хар-ку \nдругого игрока': changeTrait,
  })

  addCM('.charValue[class~="curPlr"]', {
    'Обменять хар-ку с игроком': null,
    'Изменить хар-ку': changeTrait
  })
}

function addInitalTableInteractions() {
  addCM('.colHeader', {
    'Добавить игрока': addNewPlr,
    'Удалить игрока': deletePlr
  })
}

function nextTurn() {
  const charValueList = document.querySelectorAll('.charValue')
  const curPlrTraitIndList = []

  for (let ind = 0; ind < charValueList.length; ind++) {
    if (charValueList[ind].classList.contains('curPlr')) {
      curPlrTraitIndList.push(ind)
    }
  }

  curPlrTraitIndList.forEach(ind => {
    charValueList[ind].classList.remove('curPlr')
    const nextInd = (ind + 1) % (curTableWidth * TABLE_HEIGHT)
    charValueList[nextInd].classList.add('curPlr')
  })

  addCharValueCM()
}

function fillData() {
  // fill data to charValue div 

  const rows = userTable.querySelectorAll('.charTypes')
  for (const row of rows) {
    for (const charValue of row.querySelectorAll('.charValue')) {
      changeTrait(charValue, true)
    }
  }

  // transfer input data to colHeader div and textfit it, also give players action cards

  const plrNameInputList = userTable.querySelectorAll('.plrNameInput')
  plrNameInputList.forEach(playerNameInput => {
    const playerName = playerNameInput.value
    const colHeader = playerNameInput.closest('.colHeader')

    colHeader.innerHTML = playerName
    colHeader.style.display = 'block'
    
    plrsActCards[playerName] = []
    const actCardInd1 = rnd(0, actions.length-1)
    plrsActCards[playerName].push(actions.splice(actCardInd1, 1)[0])
    const actCardInd2 = rnd(0, actions.length-1)
    plrsActCards[playerName].push(actions.splice(actCardInd2, 1)[0])
    
    playerNameInput.remove()
  })
  textFitWithDefaultParams(userTable.querySelectorAll('.colHeader'))
}

function addGeneralTableInteractions() {
  const tableRowList = document.querySelectorAll('.charTypes')
  tableRowList.forEach(tableRow => {
    tableRow.children[1].children[0].classList.add('curPlr')
  })

  addShowTraitAct()
  addCharValueCM()
  
  addCM('.colHeader', {})
  addCM('.rowHeader', {
    'Заменить всем хар-ку': changeRow
  })
}

/**
 * 
 * @param {HTMLElement} charValue - the charValue or textFitted HTMLElement
 * @param {boolean} isInitial - is this function called in the initial stage of the game
 */
function changeTrait(charValue, isInitial = false) {
  charValue = getCell(charValue)
  const curCharName = charValue.closest('.charTypes').querySelector('.rowHeaderCell').querySelector('.rowHeader').querySelector('.textFitted').innerHTML
  const curCharDataList = dataDict[curCharName]

  if (charValue.children[0]) { charValue.children[0].remove() }
  charValue.innerHTML = curCharDataList.splice(rnd(0, curCharDataList.length-1))[0] // изменить при переходе на бекенд
  textFitWithDefaultParams(charValue)

  if (!isInitial) {
    charValue.classList.add('changedTrait')
    setTimeout(() => {
      charValue.classList.remove('changedTrait')
    }, 300)
  }
}

/**
 * 
 * @param {HTMLElement} rowHeader 
 */
function changeRow(rowHeader) {
  const charValueList = rowHeader.closest('.charTypes').querySelectorAll('.charValue')

  for (const charValue of charValueList) {
    changeTrait(charValue)
  }
}