import utils from "../utils";
import PlayNumber from "./PlayNumber";
import Stars from "./Stars";
import PlayAgain from "./PlayAgain";
import useGameState from "./useGameState";

const Game = props => {
  //use elements out of custom hook
  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  } = useGameState();

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  //check game status
  const gameStatus = availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';

  //check status of number
  const numberStatus = (number) => {
    if(!availableNums.includes(number)){
      return 'used';
    }
    if(candidateNums.includes(number)){
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available'
  };

  const onNumberClick = (number, currentStatus) => {
    if(gameStatus !== 'active' || currentStatus === 'used'){
      return;
    }
    const newCandidateNums = 
      currentStatus === 'available' ? candidateNums.concat(number) : candidateNums.filter(cn => cn !== number);
    
    setGameState(newCandidateNums);

  };

    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            {gameStatus !== 'active' ? (
              <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus}/> 
            ): (<Stars stars={stars} />)
            }
          </div>
          <div className="right">
            {utils.range(1, 9).map(number =>
              <PlayNumber 
              key={number} 
              number={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
              />
            )}
          </div>
        </div>
        <div className="timer">Time Remaining: {secondsLeft}</div>
      </div>
    );
  };
  export default Game;