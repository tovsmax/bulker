const initGameBtn = document.getElementById('initGameBtn')
const tableInputs = document.querySelectorAll('.tableInput')
const initGameCont = document.getElementById('initGameCont')
const userTable = document.getElementById('userTable')

const colHeaderNames = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

userTable.hidden = true
initGameCont.hidden = true

createTable()

initGameBtn.addEventListener('click', createTable)

function createTable () {
  const colQTY = tableInputs[0].value
  const rowQTY = tableInputs[1].value

  const colgroup = userTable.querySelector('colgroup')
  const colHeaders = userTable.querySelector('.colHeaders')
  for (let colInd = 0; colInd < colQTY; colInd++) {
    colgroup.innerHTML += '<col class="plrCols">'
    colHeaders.innerHTML += `<th class="colHeaderCell"><div class="colHeader tableHeader">${colHeaderNames[colInd]}</div></th>`
  }

  const tbody = userTable.querySelector('tbody')
  for (let rowInd = 0; rowInd < rowQTY; rowInd++) {
    const row = document.createElement('tr')
    row.className = 'charTypes'

    row.innerHTML = `<th class="rowHeaderCell"><div class="rowHeader tableHeader">${rowInd + 1}</div></th>`
    row.innerHTML += '<td class="charValueCell"><div class="charValue"></div></td>'.repeat(colQTY)

    tbody.appendChild(row)
  }

  initGameCont.style.display = 'none'
  userTable.hidden = false
}
