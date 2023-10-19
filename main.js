function createGame(player1, situation, player2, player3, player4) {
  return `
         <li>
              <img
                src="./assets/icon-${player1}.svg"
                alt="${player1}'s Flag"
              /><!--Bandeira 1-->
              <strong> ${situation} </strong>
              <img
                src="./assets/icon-${player2}.svg"
                alt="${player2}'s Flag"/>
              <p><strong> 3 x 1 </strong></p>
              </li>
            <li>
              <img
                src="./assets/icon-${player3}.svg"
                alt=" ${player3}'s flag"
              /><!--Bandeira 1-->
              <strong> ${situation} </strong>
              <img
                src="./assets/icon-${player4}.svg"
                alt="${player4}'s Flag"
              />
              <p><strong> 4 x 1</strong></p>
            </li>
 `
}

function createCard(date, day, games) {
  return `
  <div class="card">
          <h2> ${date} <span> ${day} </span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
<header>
<img src="./assets/logo.svg" alt="Card's Logo"width="500px" />
      </header>
      <main id="cards">
        ${createCard(
          "05/12/22",
          "segunda",
          createGame(
            "croatia",
            "Encerrado",
            "japan",
            "brazil",
            "south-korea"
          )
        )} 
        ${createCard("06/12/22", "terça")}
      </main>
`
