import { getGameScreenHeight } from '../gameScreenSize';

const FallDown = entities => {
  const keys = Object.keys(entities);
  //remove pot from keys
  const potIndex = keys.indexOf('pot');
  keys.splice(potIndex, 1);

  keys.forEach(key => {
    const entity = entities[key];
    if (entity && entity.position) {
      entity.position = [entity.position[0], entity.position[1] + 1];
      console.log(key, entities[key]);

      //check if entity is out of bounds
      if (entity.position[1] > getGameScreenHeight() - 100) {
        delete entities[key];
      }
    }
  });

  return entities;
};

export { FallDown };
