import { ItemEntity } from './ItemEntity';
import { POT_HEIGHT, POT_WIDTH } from '../../components/entities/Pot';
import { getGameScreenHeight } from '../gameScreenSize';
import PointManagement from '../PointManagement';

let pointManagement: PointManagement;

const setPointManagement = (manager: PointManagement) => {
  pointManagement = manager;
};

function collides(item: ItemEntity, pot) {
  const xCollides =
    pot.position[0] - POT_WIDTH / 2 < item.position[0] + item.radius &&
    pot.position[0] + POT_WIDTH / 2 > item.position[0] - item.radius;
  const yCollides =
    getGameScreenHeight() - 100 - POT_HEIGHT < item.position[1] + item.radius &&
    getGameScreenHeight() - 100 > item.position[1] - item.radius;
  return xCollides && yCollides;
}

const CollisionSystem = entities => {
  const pot = entities.pot;
  const items: [ItemEntity] = Object.keys(entities)
    .filter(key => entities[key].type !== 'pot')
    .map(key => entities[key]);

  items.forEach((item: ItemEntity) => {
    // check if item is colliding with pot
    if (collides(item, pot)) {
      console.log(item, 'collided with pot');
      // increment score and remove item
      pointManagement.incrementPoints(item.itemType.points);
      delete entities[item.id];
    }
  });
  return entities;
};

export default CollisionSystem;
export { setPointManagement };
