import React, { useState } from 'react';



const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flip-card-inner">
          <div >
            {<h1>Info goeds here</h1>}
          </div>
          <div className="flip-card-back">
            {<h2>This is the back</h2>}
          </div>
        </div>
      </div>
    );
  }
  
  export default FlipCard;
  