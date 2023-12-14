

export const ATTACK = 'ATTACK';
export const HEAL = 'HEAL';

export const attack = (damage) => ({
  type: ATTACK,
  payload: damage,
});

export const heal = (amount) => ({
  type: HEAL,
  payload: amount,
});