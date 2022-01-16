const oururl = 'http://localhost:5000'

const resource = '/Players'

async function getPlayers () {
  await fetch(oururl + resource, {
    // mode: 'no-cors'
  })
    .then(res => console.log(res))
}

async function getPlayersXHR () {
  const req = new XMLHttpRequest()
  req.open('GET', oururl + resource)
  req.setRequestHeader('Content-Type', 'application/json')
  req.setRequestHeader('mode')
  req.send()

  req.addEventListener('load', () => {
    console.log(req.response)
  })
}

getPlayers()
