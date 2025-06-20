"use client";
import React, { useState } from 'react';
import './coin_flip.css';

const CoinFlip = () => {
  const [isHeads, setIsHeads] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [landedState, setLandedState] = useState({});
  const [viewIndex, setViewIndex] = useState(0);

  const getView = () => {
    if (landedState.arrayLength) {
      return landedState.shuffledArray[viewIndex] === 0 ? 'tails' : 'heads';
    }
    return '';
  };

  const hasData = () => landedState.arrayLength > 0;
  const getRandomness = () => {
    return 'Randomness: ' + new Date(landedState.randomness).toISOString();
  };

  const handleFlip = async () => {
    setIsFlipping(true);
    setViewIndex(0);
    setTimeout(() => {
      setIsFlipping(false);
    }, 2000);
    const res = await fetch('/api/flip');
    const data = await res.json();
    setLandedState(data.result);
  };

  return (
    <div className="coin-container">
      {isFlipping && <div className={'coin flipping'}>
        <img
          src="/flipping_heads.png"
          alt="Heads Flipping"
          className={`coin-face ${isHeads ? 'visible' : 'hidden'}`}
        />
        <img
          src="/flipping_tails.png"
          alt="Tails Flipping"
          className={`coin-face ${!isHeads ? 'visible' : 'hidden'}`}
        />
      </div>}
      {!isFlipping && <div className={'coin'}>
        <img
          src="/tails.png"
          alt="Tails"
          className={`coin-face ${getView() === 'tails' ? 'visible' : 'hidden'}`}
        />
        <img
          src="/heads.png"
          alt="Heads"
          className={`coin-face ${getView() === 'heads' ? 'visible' : 'hidden'}`}
        />
      </div>}

      <div className="button-container">
        {hasData() && <h3>{`View coin ${viewIndex + 1} of ${landedState.arrayLength} `}</h3>}
      </div>
      <div className="button-container">  
        <button
          className='button'
          disabled={isFlipping || !hasData()} 
          onClick={() => setViewIndex((viewIndex - 1 + landedState.arrayLength) % landedState.arrayLength)}
        >
          Previous Coin
        </button>
        <button className='button'
          onClick={handleFlip} disabled={isFlipping}>
          {isFlipping ? 'Flipping...' : 'Flip Coins'}
        </button>
        <button className='button'
          disabled={isFlipping || !hasData()} 
          onClick={() => setViewIndex((viewIndex + 1) % landedState.arrayLength)}>
          Next Coin
        </button>
      </div>
      <div className="button-container">
        {hasData() && <h4>{getRandomness()}</h4>}
      </div>  
    </div>
  );
};

export default CoinFlip;
