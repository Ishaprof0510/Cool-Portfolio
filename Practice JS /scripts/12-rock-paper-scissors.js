
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
  updateScoreElement();
  
  /*
  if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
  */
  
  let isAutoPlaying = false;
  let intervalId;


  


function autoplay() {
   if( !isAutoPlaying ) {
    intervalID = setInterval( () => {
      const playerMove = pickComputerMove();
       playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;

        // 12 T.
        document.querySelector('.js-autoplay-button')
        .innerHTML = 'Stop Playing';
        
  }  else {
    clearInterval(intervalID);
    isAutoPlaying = false;
    
    // 12 T.
    document.querySelector('.js-autoplay-button')
    .innerHTML = 'Auto Playing';
  }

  }
   
  //12 S.

  document.querySelector('.js-autoplay-button')
  .addEventListener ('click', () => {
    autoplay();
  })
 
document.querySelector('.js-rock-button')
.addEventListener('click', () => {
  playGame('rock');
} )

document.querySelector('.js-paper-button')
.addEventListener('click', () => {
  playGame('paper');
} )


document.querySelector('.js-scissors-button')
.addEventListener('click', () => {
  playGame('scissors');
} )


document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');

    //12 U.
  } else if (event.key === 'a') {
    autoplay();

    //12 W.
  } else if (event.key === 'Backspace') {
       resetScore();
  }
 })


  function playGame(playerMove) {
    const computerMove = pickComputerMove();
  
    let result = '';
  
    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }
  
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }
  
    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }
  
    localStorage.setItem('score', JSON.stringify(score));
  
    updateScoreElement();
  
    document.querySelector('.js-result').innerHTML = result;
  
    document.querySelector('.js-moves').innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;
  }
  
  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
  
  document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    updateScoreElement();
  })



  function pickComputerMove() {
    const randomNumber = Math.random();
  
    let computerMove = '';
  
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }
  
    return computerMove;
  }
  
// 12 V.
  function resetScore() {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
       updateScoreElement();
  }

  document.querySelector('.js-reset-score-button')
    .addEventListener('click', () => {
     // 12 V.  resetScore();
   

    //12 X.
    showResetConfirmation();
    
  });

    function showResetConfirmation() {
      document.querySelector('.js-reset-confirmation')
      .innerHTML = `
      Are you sure you want to reset the score?
      <button class="js-reset-confirm-yes reset-confirm-button">
      Yes
      </button>
      <button class="js-reset-confirm-no reset-confirm-button">
      No
      </button>
      `;

      document.querySelector('.js-reset-confirm-yes')
      .addEventListener('click', () => {
        resetScore();
        hideResetConfirmation();

      });

      document.querySelector('.js-reset-confirm-no')
      .addEventListener('click', () => {
        hideResetConfirmation();
      });
    }

    function hideResetConfirmation () {
      document.querySelector('.js-reset-confirmation')
      .innerHTML = '';

    }