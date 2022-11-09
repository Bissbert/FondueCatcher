import { getRadius } from '../../components/entities/Pot';
import { getGameScreenSize } from '../gameScreenSize';

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
  if (newPos >= getRadius()) {
    if (newPos >= getGameScreenSize() - getRadius() * 3) {
      console.log(
        'is greater than game screen size, so set to game screen size:',
        getGameScreenSize() - getRadius() * 3,
      );
      pot.position[0] = getGameScreenSize() - getRadius() * 3;
    } else {
      console.log('moving pot from', pot.position[0], 'to', newPos);
      pot.position = [newPos];
    }
  } else {
    console.log('moving pot to', getRadius());
    pot.position = [getRadius()];
  }
};

export { MovePot };
