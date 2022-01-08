const sendMsgBtn = document.getElementById('sendMsgBtn')
const getMsgsBtn = document.getElementById('getMsgsBtn')

const msgInput = document.getElementById('msgInput')
const getMessagePanel = document.getElementById('getMessage')

const url = 'https://jsonplaceholder.typicode.com/'

// send message block

async function sendMessage () {
  const text = msgInput.value

  await fetch(url + 'posts', {
    method: 'POST',
    body: JSON.stringify({
      title: text,
      body: text,
      userId: 228
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
    .then(response => response.json())
    .then(json => console.log(json))
  msgInput.value = ''
}

msgInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage()
  }
})

sendMsgBtn.addEventListener('click', sendMessage)

// get messages block

function createMsgOutput (text) {
  const msgOutput = document.createElement('input')
  msgOutput.value = text
  msgOutput.className = 'retrievedMsg'
  msgOutput.readOnly = true
  return msgOutput
}

async function getMessages () {
  const msgs = await fetch(url + 'posts')
    .then(response => response.json())

  msgs.every((msg, ind) => {
    if (ind === 5) {
      return false
    }

    // не забыть поменять при использовании апи булкера !!!
    const newMsgOutput = createMsgOutput(msg.title)
    getMessagePanel.appendChild(newMsgOutput)
    return true
  })
}

getMsgsBtn.onclick = getMessages
