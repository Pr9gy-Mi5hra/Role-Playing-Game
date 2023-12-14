

import { ATTACK, HEAL } from './actions';

const initialState = {
  health: 100,
  level: 1,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ATTACK:
      return {
        ...state,
        health: state.health - action.payload,
      };
    case HEAL:
      return {
        ...state,
        health: state.health + action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;







