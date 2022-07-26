//custom hook
import { useEffect, useState } from "react";
import utils from "../utils";

const useGameState = () => {
    const [stars, setStars] = useState(utils.random(1,9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);
  
    useEffect(() => {
      //setTimeout
      if(secondsLeft > 0 && availableNums.length > 0){
        const timerId = setTimeout(() => {
          setSecondsLeft(secondsLeft - 1);
        }, 1000);
        //everytime component rerenders we will remove previous timer and introduce a new timer
        return () => clearTimeout(timerId);
      }
    });
    const setGameState = (newCandidateNums) => {
        if(utils.sum(newCandidateNums) !== stars){
            setCandidateNums(newCandidateNums);
        }else{
            //if the number is not included the keep it
            const newAvailableNums = availableNums.filter(
            n => !newCandidateNums.includes(n)
            );
            // redraw stars (from what's available)
            setStars(utils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    }

    return { stars, availableNums, candidateNums, secondsLeft, setGameState };
}
export default useGameState;