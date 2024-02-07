import React, { useState } from "react"
import ChallengeContainer from "./challengeContainer";

function Greetings()
{
    const[ShowChallenge, setShowChallenge] = useState(false);
    const HandleTakeChallenge=()=>
    {
        setShowChallenge(true);
    }
    return (
    <>
    <div class="div3">
        <div class="challengeMotivation">
        Hello Dear Green Thinker! Embark on a swift yet meaningful challenge with me, and together, let's elevate our commitment to sustainability 💚
        </div>
        <button className="ChallengeButton" onClick={HandleTakeChallenge}>Take up challenge</button>
        {ShowChallenge && <ChallengeContainer/>}
    </div>
    </>
    );
}

export default Greetings;