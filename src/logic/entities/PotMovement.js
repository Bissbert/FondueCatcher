import { getPotWidth } from '../../components/entities/Pot';
import { getGameScreenWidth } from '../gameScreenSize';

const MovePot = (entities, { touches }) => {
  const pot = entities.pot;
  touches
    .filter(t => t.type === 'move')
    .forEach(t => {
      console.log(pot);
      if (pot && pot.position) {
        updatePot(pot, t);
      }
    });
  return entities;
};

const updatePot = (pot, t) => {
  const newPos = pot.position[0] + t.delta.pageX;
  if (newPos >= getPotWidth()) {
    if (newPos >= getGameScreenWidth() - getPotWidth()) {
      console.log(
        'is greater than game screen size, so set to game screen size:',
        getGameScreenWidth() - getPotWidth(),
      );
      pot.position[0] = getGameScreenWidth() - getPotWidth();
    } else {
      console.log('moving pot from', pot.position[0], 'to', newPos);
      pot.position = [newPos];
    }
  } else {
    console.log('moving pot to', getPotWidth());
    pot.position = [getPotWidth()];
  }
};

export { MovePot };
