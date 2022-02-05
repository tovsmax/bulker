let tableInputs = document.querySelectorAll('.tableInput')
tableInputs = (tableInputs.length) ? tableInputs : [{value: 6}, {value: 8}]

const userTable = document.getElementById('userTable')
const ownerInd = 2

const dataDict = {
  Био: ['test data'],
  'Проф.': professions,
  'Черта характера': player_traits,
  'Статус здоровья': health_statuses,
  Фобия: phobias,
  Хобби: hobbies,
  'Доп. инфа': appendixes,
  Багаж: equips
}

/**
 * 
 * @param {HTMLElement} elem
 */
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

function enableCells(cellList) {

}

function createTable () {
  const colQTY = tableInputs[0].value
  const rowQTY = tableInputs[1].value

  // const colHeaderNames = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const colHeaderNames = [
    'Мао',
    'Моня',
    'Магнус',
    'Мао',
    'Моня',
    'Магнус',
  ]
  const colgroup = userTable.querySelector('colgroup')
  const colHeaders = userTable.querySelector('.colHeaders')
  for (let colInd = 0; colInd < colQTY; colInd++) {
    colgroup.innerHTML += '<col class="plrCols">'
    colHeaders.innerHTML += `<th class="colHeaderCell"><div class="colHeader tableHeader">${colHeaderNames[colInd]}</div></th>`
  }

  const rowHeaderNames = Object.keys(dataDict)
  const tbody = userTable.querySelector('tbody')
  for (let rowInd = 0; rowInd < rowQTY; rowInd++) {
    const row = document.createElement('tr')
    row.className = 'charTypes'

    const curCharName = rowHeaderNames[rowInd]
    row.innerHTML = `<th class="rowHeaderCell"><div class="rowHeader tableHeader">${curCharName}</div></th>`
    
    for (let colInd = 0; colInd < colQTY; colInd++) {
      
      const ownerClass = (colInd === ownerInd) ? ' owned' : ''
      row.innerHTML += `<td class="charValueCell"><div class="charValue${ownerClass}"></div></td>`
    }

    tbody.appendChild(row)
  }

  const tableHeaderList = userTable.querySelectorAll('.tableHeader')
  textFitWithDefaultParams(tableHeaderList)

  // const charValueText = document.querySelectorAll('.charValue .textFitted')
  // charValueText.forEach((textFitted) => {
  //   textFitted.style.visibility = 'hidden'
  // })

  
  userTable.hidden = false
}

function fillData() {
  // const rowHeaderNames = userTable.querySelectorAll('.rowHeader').forEach()

  const rows = userTable.querySelectorAll('.charTypes')
  for (const row of rows) {
    const curCharName = row.querySelector('.rowHeaderCell').querySelector('.rowHeader').querySelector('.textFitted').innerHTML
    const curCharDataList = dataDict[curCharName]

    for (const charValue of row.querySelectorAll('.charValue')) {
      const curCharRecord = curCharDataList[rnd(0, curCharDataList.length-1)]
      charValue.innerHTML = curCharRecord
    }
    
  }
  const charValueList = userTable.querySelectorAll('.charValue')
  textFitWithDefaultParams(charValueList)
}