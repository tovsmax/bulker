// import { downloadZip } from "/node_modules/client-zip/index.js"
import { downloadZip } from './downloadZip.js'


/**
 * 
 * @param  {...String} data 
 */
async function downloadData(...data) {
  // console.log(data);

  // get the ZIP stream in a Blob
  const blob = await downloadZip(data).blob()
  // const blob = await downloadZip([{input: 'test', name: 'лол.txt'}, {input: 'test', name: 'кек.txt'}]).blob()

  // make and click a temporary link to download the Blob
  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = "Экспорт файл Бункер 2.zip"
  link.click()
  link.remove()

  // in real life, don't forget to revoke your Blob URLs if you use them
}


function createExportFile(name, input) {
  return new File(
    [input], 
    name,
  )
}

function createPLayersExportFile() {
  const colHeaderSpanList = document.querySelectorAll('.colHeader>span')
  const rowList = document.querySelectorAll('.charTypes')

  let playersExportFiles = []
  colHeaderSpanList.forEach((colHeaderSpan, chtInd) => {
    // export traits
    const plrName = colHeaderSpan.innerHTML
    let playerData = ''
    rowList.forEach(row => {
      const traitName = row.children[0].children[0].children[0].innerHTML
      const traitValue = row.children[chtInd+1].children[0].children[0].innerHTML

      playerData += traitName + ': ' + traitValue + '\n'
    })

    // export action cards
    playerData += 'Карты действия:\n'
    const curPlrActCards = plrsActCards[plrName]
    curPlrActCards.map(actCard => {
      playerData += actCard + '\n'
    })

    // create txt-file entry object
    playersExportFiles.push(createExportFile('.player' + (chtInd + 1) + '.txt', playerData))
  })
  return playersExportFiles
}

function createGlobalExportFile() {
  const globalSingleTraitList = document.querySelectorAll('.globalTraitValue')
  let globalData = 'globalTestData'
  const globalExportFile = createExportFile('globalTraits.txt', globalData)
  return globalExportFile
}

function createEventsExportFile() {
  let eventsData = 'eventsTestData'
  const eventsExportFile = createExportFile('moderHand.txt', eventsData)
  console.log(eventsExportFile);
  return eventsExportFile
}

export function exportGame() {
  downloadData(
    ...createPLayersExportFile(),
    createGlobalExportFile(),
    createEventsExportFile()
  )
}