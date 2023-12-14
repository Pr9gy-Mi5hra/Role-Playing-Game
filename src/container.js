


import React from 'react';
import { connect } from 'react-redux';
import { attack, heal } from './actions';

const GameComponent = ({ health, attack, heal }) => {
  return (
    <div>
      <h1>Health: {health}</h1>
      <button onClick={() => attack(10)}>Attack</button>
      <button onClick={() => heal(10)}>Heal</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    health: state.game.health,
  };
};

const mapDispatchToProps = {
  attack,
  heal,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);
