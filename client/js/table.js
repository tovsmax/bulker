let plrsActCards = {}

let curGameStageInd = 0
// 0: Инициализация
// 1: Расскрытие хар-ик
// 2: Голосование
// 3: Оправдание и Переголосование
// 4: Конец игры

const userTable = document.getElementById('userTable')

const curPlrInd = 0

const dataDict = {
  'Био':             ['test data'],
  'Проф.':           professions,
  'Черта характера': player_traits,
  'Статус здоровья': health_statuses,
  'Фобия':           phobias,
  'Хобби':           hobbies,
  'Доп. инфа':       appendixes,
  'Багаж':           equips
}
const rowHeaderNames = Object.keys(dataDict)

const TABLE_INIT_WIDTH = 5 // начальное кол-во игроков!!!
let curTableWidth = 0
const TABLE_HEIGHT = rowHeaderNames.length

function textFitWithDefaultParams (elem) {
  textFit(elem, {
    alignHoriz: true,
    alignVert: true,
    multiLine: true,
  })
}

/**
 * 
 * @param {NodeListOf<Element>} cellList 
 */
function disableCells(cellList) {
  cellList.foreach(cell => {
    cell.className.add('disabled')
    cell.oncontextmenu = null
    cell.onmousedown = null
    cell.onmouseup = null
  })
}

function createTable () {
  const tbody = userTable.querySelector('tbody')
  for (let rowInd = 0; rowInd < TABLE_HEIGHT; rowInd++) {
    const tableRow = document.createElement('tr')
    tableRow.className = 'charTypes'
    tableRow.innerHTML = `<th class="rowHeaderCell"><div class="rowHeader tableHeader">${rowHeaderNames[rowInd]}</div></th>`

    tbody.appendChild(tableRow)
  }

  textFitWithDefaultParams(tbody.querySelectorAll('.rowHeader'))

  for (let colInd = 0; colInd < TABLE_INIT_WIDTH; colInd++) {
    addNewPlr()
  }
  
  userTable.hidden = false
}

function addNewPlr() {
  const colgroup = userTable.querySelector('colgroup')
  const colHeaders = userTable.querySelector('.colHeaders')
  
  colgroup.innerHTML += '<col class="plrCols">'
  const curPlrQTY = document.querySelectorAll('.colHeader').length + 1
  colHeaders.innerHTML += `
    <th class="colHeaderCell">
      <div class="colHeader tableHeader">
        <input class="plrNameInput" value="Игрок ${curPlrQTY}">
      </div>
    </th>`
  
  const tableRows = userTable.querySelectorAll('tr')
  for (let rowInd = 1; rowInd <= TABLE_HEIGHT; rowInd++) {
    tableRows[rowInd].innerHTML += `
      <td class="charValueCell">
        <div class="charValue"></div>
      </td>`
  }

  addInitalTableInteractions()
  curTableWidth++
}

/**
 * 
 * @param {HTMLElement} charValue 
 */
function deletePlr(charValue) {
  const tableRows = userTable.rows
  const delColInd = charValue.closest('th').cellIndex

  for (const row of tableRows) {
    row.children[delColInd].remove()
  }
}

