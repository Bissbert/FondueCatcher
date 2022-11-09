import { getGameScreenHeight } from '../gameScreenSize';
import PointManagement from '../PointManagement';

let pointManager: PointManagement;

const FallDown = entities => {
  const keys = Object.keys(entities);
  // get keys containing "bread" in the name
  const breadKeys = keys.filter(key => key.includes('bread'));

  breadKeys.forEach(key => {
    const entity = entities[key];
    if (entity && entity.position) {
      entity.position = [entity.position[0], entity.position[1] + 1];
      //check if entity is out of bounds
      if (
        !isNaN(getGameScreenHeight()) &&
        entity.position[1] > getGameScreenHeight() - 100
      ) {
        delete entities[key];
        pointManager.incrementPoints(-1);
      }
    }
  });

  return entities;
};

const setPointManagerFallDown = (pointManagerInstance: PointManagement) => {
  pointManager = pointManagerInstance;
};

export { FallDown, setPointManagerFallDown };
