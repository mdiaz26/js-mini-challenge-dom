/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
let playerContainer = document.querySelector(".player-container")
PLAYERS.forEach(player => {
let p = document.createElement('p')
p.innerHTML = `
<div class="player" data-number=${player.number}>
  <h3>
    ${player.name} (<em>${player.nickname}</em>)
  </h3>
  <img src="${player.photo}" alt="${player.name}">
</div>
`
playerContainer.append(p)
})


/***** Deliverable 4 *****/
let raheem = document.querySelector(`[data-number="7"]`)
raheem.remove()