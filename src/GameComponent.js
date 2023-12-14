


import React from 'react';
import { connect } from 'react-redux';
import { attack, heal } from './actions';

const GameComponent = ({ health, level, attack, heal }) => {
  return (
    <div className="game-container">
      <h1>RPG Game</h1>
      <div>
        <h2>Player Stats:</h2>
        <p>Health: {health}</p>
        <p>Level: {level}</p>
      </div>
      <div className="button-container">
        <button onClick={() => attack(10)}>Attack</button>
        <button onClick={() => heal(10)}>Heal</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    health: state.game.health,
    level: state.game.level,
  };
};
const mapDispatchToProps = {
  attack,
  heal,
};
export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);





