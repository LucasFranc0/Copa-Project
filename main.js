function createFinal(player1, situation, player2, score) {
  return `  <li>
              <img
                src="./assets/icon=${player1}.svg"
                alt="${player1}'s Flag"
              />
              <strong> ${situation} </strong>
              <img
                src="./assets/icon=${player2}.svg"
                alt="${player2}'s Flag"/>
              <p><strong> ${score} </strong></p>
              </li>
  `
}

function createGame(
  player1,
  situation,
  player2,
  player3,
  player4,
  score1,
  score2
) {
  return `
         <li>
              <img
                src="./assets/icon=${player1}.svg"
                alt="${player1}'s Flag"
              />
              <strong> ${situation} </strong>
              <img
                src="./assets/icon=${player2}.svg"
                alt="${player2}'s Flag"/>
              <p><strong> ${score1} </strong></p>
              </li>
            <li>
              <img
                src="./assets/icon=${player3}.svg"
                alt=" ${player3}'s flag"
              />
              <strong> ${situation} </strong>
              <img
                src="./assets/icon=${player4}.svg"
                alt="${player4}'s Flag"
              />
              <p><strong> ${score2} </strong></p>
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
            "south korea",
            "3 X 1",
            "4 X 1"
          )
        )} 
        ${createCard(
          "09/12/22",
          "terça",
          createGame(
            "brazil",
            "Encerrado",
            "croatia",
            "netherlands",
            "argentina",
            "2 X 4",
            "3 X 4  "
          )
        )}
        ${createCard(
          "18/12/22",
          "domingo",
          createFinal(
            "argentina",
           "Encerrado",
            "france",
             "4 X 2"
          )
        )}

      </main>
`
