import React, { useState } from "react";
import Score from "./score";

const Challenge3 = ({onNextChallenge}) => {
  const [response, setResponse] = useState(""); //intially the useState is set empty to the 'response'

  const GreenClick = () => {
    setResponse("Green");
    Score();
  };

  const RedClick = () => {
    setResponse("Red");
  };

  const handleNextClick = () =>
  {
    onNextChallenge();
  }

  return (
    <div className="Challenges">
      <p>
      Is your wardrobe mindful, I think you avoid fast fashion right!
      </p>
      <div className="buttons">
        <button className="commonButton" onClick={GreenClick}>YES</button>
        <button className="commonButton" onClick={RedClick}>NO</button>
      </div>
      <button className="NextButton"onClick={handleNextClick}>Finish</button>
    </div>
  );
};

export default Challenge3;