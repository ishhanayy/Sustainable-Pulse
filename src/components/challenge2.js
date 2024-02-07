import React, { useState } from "react";
import Score from "./score";

const Challenge2 = ({onNextChallenge}) => {
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
      Do you drive less to conserve fossile energy and have access your transportation habits ?
      </p>
      <div className="buttons">
        <button className="commonButton" onClick={GreenClick}>YES</button>
        <button className="commonButton" onClick={RedClick}>NO</button>
      </div>
      <button className="NextButton"onClick={handleNextClick}>Next ➡️</button>
    </div>
  );
};

export default Challenge2;