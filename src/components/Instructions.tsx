

type InstructionsProps = {
    setShow:Function;
}

export function Instructions({setShow}:InstructionsProps) {
    function handleCloseButton() {
        setShow(false);
      }
  return (
    <div id="instructions" className="instructions">
      <div className="instructions-header">Game Instructions</div>
      <div className="instructions-content">
        <p>
          To play versus the computer you should start by clicking one of the
          flollowing buttons. The buttons represent the hand signs from left to
          right: Rock, Paper, Scissors.
        </p>
        <img className="img-hand-signs" src="./img/player-buttons.png" alt="" />
        <h3>Game rules</h3>
        <div className="winner-ways-box">
          <div className="game-button rock-way"></div>
          <div className="box-beats">beats</div>
          <div className="game-button scissors-way"></div>
        </div>
        <div className="winner-ways-box">
          <div className="game-button scissors-way"></div>
          <div className="box-beats">beats</div>
          <div className="game-button paper-way"></div>
        </div>
        <div className="winner-ways-box">
          <div className="game-button paper-way"></div>
          <div className="box-beats">beats</div>
          <div className="game-button rock-way"></div>
        </div>
        <p>
          It's a tie when both players chose the same hand sign, this means no
          one gets points.
        </p>

        <div className="box-instruction-button">
          <div className="img-button">
            <img src="./img/reset-button.png" alt="" />
          </div>
          <div className="img-button-text">
            It resets the actual score so a new game will start
          </div>
        </div>
        <div className="box-instruction-button">
          <div className="img-button">
            <img src="./img/menu-button.png" alt="" />
          </div>
          <div className="img-button-text">To go back to the home page</div>
        </div>
        <div className="box-instruction-button">
          <div className="img-button img-start-button">
            <img src="./img/play-button.png" alt="" />
          </div>
          <div className="img-button-text">
            To start playing the game (only avaliable on PC vs PC)
          </div>
        </div>
        <div className="box-instruction-button">
          <div className="img-button img-start-button">
            <img src="./img/score.png" alt="" />
          </div>
          <div className="img-button-text">
            Score: The one with the majority of points is the actual winner
          </div>
        </div>
      </div>
      <div className="instructions-footer">
        <button
          onClick={handleCloseButton}
          id="close-instructions"
          className="game-action-button"
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  );
}
