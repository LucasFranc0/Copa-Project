function createFinal(player1, situation, player2, score) {
  return `     <p class="final"> <strong> FINAL </strong> </p>
              <li>
              <img
                src="./assets/icon=${player1}.svg"
                alt="${player1}'s Flag"
              />
              <strong class="situation"> ${situation} </strong>
              <img
                src="./assets/icon=${player2}.svg"
                alt="${player2}'s Flag"/>
              <p><strong> ${score} </strong></p>
              </li>
  `
}

function createGame(player1, situation, player2, score) {
  return `
         <li>
              <img
                src="./assets/icon=${player1}.svg"
                alt="${player1}'s Flag"
              />
              <strong class="situation"> ${situation} </strong>
              <img
                src="./assets/icon=${player2}.svg"
                alt="${player2}'s Flag"/>
              <p><strong> ${score} </strong></p>
              </li>
 `
}

function createCard(date, day, games) {
  return `
  <div class="card">
          <h2> ${date} <span> ${day} </span></h2>
          <p> <strong> </strong> </p>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
        createCard(
          "05/12/22",
          "segunda",
          createGame("brazil", "Encerrado", "south korea", "3 X 1") +
            createGame("japan", "Encerrado", "croatia", "1 X 3")
        ) +
        createCard(
          "09/12/22",
          "terça",
          createGame("croatia", "Encerrado", "brazil", "4 X 2") +
            createGame("netherlands", "Encerrado", "argentina", "3 X 4")
        ) +
        createCard(
          "18/12/22",
          "domingo",
          createFinal("argentina", "Encerrado", "france", "4 X 2")
        )
