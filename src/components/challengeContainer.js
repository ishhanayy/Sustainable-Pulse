import React, { useState } from "react";
import Challenge1 from "./challenge1";
import Challenge2 from "./challenge2";
import Challenge3 from "./challenge3";
import Analysis from "./analysis";


const ChallengeContainer = () => {
    const [currentChallenge, setCurrentChallenge] = useState(1);

  const handleNextChallenge = () => {
    setCurrentChallenge(currentChallenge + 1);
  };

  return(
    <>
    <div className="Modal-wrapper"></div>
    <div className="Modal-container">
        {currentChallenge===1 && <Challenge1 onNextChallenge={handleNextChallenge}/>}
        {currentChallenge===2 && <Challenge2 onNextChallenge={handleNextChallenge}/>}
        {currentChallenge===3 && <Challenge3 onNextChallenge={handleNextChallenge}/>}
        {currentChallenge===4 && <Analysis/>}
    </div>
    </>
  );
};

export default ChallengeContainer;
