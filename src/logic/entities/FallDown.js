import { getGameScreenHeight } from '../gameScreenSize';
import { ItemEntity } from './ItemEntity';
import { POT_HEIGHT } from '../../components/entities/Pot';

const SPEED = 2;

const FallDown = entities => {
  const keys = Object.keys(entities);
  //remove pot from keys
  const potIndex = keys.indexOf('pot');
  keys.splice(potIndex, 1);

  keys.forEach(key => {
    const entity: ItemEntity = entities[key];
    if (entity && entity.position) {
      entity.position = [
        entity.position[0],
        entity.position[1] + entity.velocity,
      ];
      //check if entity is out of bounds
      if (
        !isNaN(getGameScreenHeight()) &&
        entity.position[1] > getGameScreenHeight() - 100 - POT_HEIGHT
      ) {
        delete entities[key];
      }
    }
  });

  return entities;
};

export { FallDown };
