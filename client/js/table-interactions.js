function showContextMenu(event, cardActionsDict) {
  const oldCM = document.querySelector('.contextMenu')
  if (oldCM) {
    oldCM.remove()
  }
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
 * @param {HTMLElement} target 
 * @returns {HTMLElement} target
 */
function getCell(target) {
  if (target.className.includes('textFitted')) {
    return target.closest('.charValue')
  } else {
    return target
  }
}

function addCharValueActs() {
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
      if (e.button !== 0) { return }

      const cell = getCell(e.target)
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

    
  })
}

function addCM(selector, cardActionsDict) {
  const elemList = document.querySelectorAll(selector)
  elemList.forEach(elem => {
    elem.oncontextmenu = event => {
      showContextMenu(event, cardActionsDict)
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

  // addCM()
}

function beginGame() {
  // fill data to charValue div

  const rows = userTable.querySelectorAll('.charTypes')
  for (const row of rows) {
    for (const charValue of row.querySelectorAll('.charValue')) {
      changeTrait(charValue, true)
    }
  }

  // transfer input data to colHeader div and textfit it

  const plrNameList = userTable.querySelectorAll('.plrNameInput')
  plrNameList.forEach(plrName => {
    const playerName = plrName.value
    const colHeader = plrName.closest('.colHeader')
    colHeader.innerHTML = playerName
    colHeader.style.display = 'block'
    plrName.remove()
  })
  textFitWithDefaultParams(userTable.querySelectorAll('.colHeader'))

  // add curPlr class

  const tableRowList = document.querySelectorAll('.charTypes')
  tableRowList.forEach(tableRow => {
    tableRow.children[1].children[0].classList.add('curPlr')
  })
  

  // change table interactions
  addCharValueActs()
  addCharValueCM()
  
  addCM('.colHeader', {})
  addCM('.rowHeader', {
    'Заменить всем хар-ку': null
  })
}

/**
 * 
 * @param {HTMLElement} charValue 
 */
function changeTrait(charValue, isInitial = false) {
  charValue = getCell(charValue)
  const curCharName = charValue.closest('.charTypes').querySelector('.rowHeaderCell').querySelector('.rowHeader').querySelector('.textFitted').innerHTML
  const curCharDataList = dataDict[curCharName]

  if (charValue.children[0]) { charValue.children[0].remove() }
  charValue.innerHTML = curCharDataList[rnd(0, curCharDataList.length-1)] // изменить при переходе на бекенд
  textFitWithDefaultParams(charValue)

  if (!isInitial) {
    charValue.classList.add('changedTrait')
    setTimeout(() => {
      charValue.classList.remove('changedTrait')
    }, 300)
  }
}