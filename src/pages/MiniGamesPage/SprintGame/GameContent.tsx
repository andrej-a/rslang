import Timer from '../../../components/Timer/Timer';
import { Card } from './Card';
import React from 'react';
import { GameContent, GameLifes } from './SprintGame.styled';

export const GameInfo = () => {
  return (
    <>
      <GameContent>
        <h3>0</h3>
        <p>+10 points</p>
        <GameLifes>
          <div id="circle1" className="active"></div>
          <div id="circle2"></div>
          <div id="circle3"></div>
        </GameLifes>
        <Card />
      </GameContent>
      <Timer />
    </>
  );
};
