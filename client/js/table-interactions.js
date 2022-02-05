function showContextMenu(event, texts) {
  const oldCM = document.querySelector('.contextMenu')
  if (oldCM) {
    oldCM.remove()
  }
  const contextMenu = document.createElement('div')
  contextMenu.classList.add('contextMenu')


  const cmItems = []
  for (let i = 0; i < texts.length; i++) {
    cmItems.push(document.createElement('div'))
    cmItems[i].innerHTML = texts[i]
    cmItems[i].classList.add('cmItem')
  }      
  contextMenu.append(...cmItems)

  contextMenu.style.top  = event.y + contextMenu.offsetHeight > window.innerHeight ? window.innerHeight - contextMenu.offsetHeight : event.y + 'px'
  contextMenu.style.left = event.x + contextMenu.offsetWidth > window.innerWidth ? window.innerWidth - contextMenu.offsetWidth : event.x     + 'px'
  
  const body = document.querySelector('body')
  body.appendChild(contextMenu)

  event.preventDefault()
  window.onclick = () => {
    contextMenu.remove()
    window.onclick = null
  }
}

function addCharValueActs() {
  const charValueList = document.querySelectorAll('.charValue')
  charValueList.forEach(charValue => {
    /**
     * 
     * @param {*} e 
     * @returns Node
     */
    function getCell(e) {
      if (e.target.className.includes('textFitted')) {
        return e.target.closest('.charValue')
      } else {
        return e.target
      }
    }

    charValue.onmouseup = (e) => {
      if (e.button !== 0) {
        return
      }

      const cell = getCell(e)
      if (!cell.classList.contains('curPlr')) { return }

      clearTimeout(pressTimer)
      cell.classList.remove('clickable')
    }

    charValue.onmousedown = (e) => {
      if (e.button !== 0) { return }

      const cell = getCell(e)
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

function addCharValueCM() {
  const charValueList = document.querySelectorAll('.charValue')
  charValueList.forEach(charValue => {
    charValue.oncontextmenu = event => {
      const cmItemTexts = charValue.classList.contains('curPlr') ? 
        [
          'Обменять хар-ку с игроком',
          'Изменить хар-ку',
        ] : [
          'Скопировать хар-ку',
          'Раскрыть хар-ку',
          'Вылечить',
          'Изменить хар-ку \nдругого игрока',
        ]
  
      showContextMenu(event, cmItemTexts)
    }
  })
}

function addColHeadersCM() {
  const colHeaderList = document.querySelectorAll('.colHeader')
  colHeaderList.forEach(colHeader => {
    colHeader.oncontextmenu = e => {
      const colHeaderTexts = [
        'Проголосовать'
      ]

      showContextMenu(e, colHeaderTexts)
    }
  })
}

function addRowHeadersCM() {
  const rowHeaderList = document.querySelectorAll('.rowHeader')
  rowHeaderList.forEach(rowHeader => {
    rowHeader.oncontextmenu = e => {
      const rowHeaderTexts = [
        'Заменить всем хар-ку'
      ]

      showContextMenu(e, rowHeaderTexts)
    }
  })
}

function addTableInteractions() {
  addCharValueActs()
  addCharValueCM()
  addColHeadersCM()
  addRowHeadersCM()
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
    const nextInd = (ind + 1) % (tableWidth * tableHeight)
    charValueList[nextInd].classList.add('curPlr')
  })
}