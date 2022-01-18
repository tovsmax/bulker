const oururl = 'https://localhost:5001'

const resource = '/Players'

async function getPlayers () {
  await fetch(oururl + resource)
    .then(res => res.json())
    .then(json => console.log(json))
}

getPlayers()
