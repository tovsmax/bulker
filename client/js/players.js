const oururl = 'http://localhost:5000'

const resource = '/Players'

async function getPlayers () {
  await fetch(oururl + resource)
    .then(res => res.json())
    .then(json => console.log(json))
}
