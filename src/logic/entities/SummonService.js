import { getGameScreenWidth } from '../gameScreenSize';
import FallingItem, { FALLING_RADIUS } from '../../components/entities/FallingItem';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ItemEntity, itemTypes } from './ItemEntity';

let nextSummonTime: number;

//times for summoning in milliseconds
const TIME_MIN = 1000;
const TIME_MAX = 4000;

/**
 * service to summon items
 * @param entities the list of entities currently in the game
 * @returns the updated list of entities
 */
const SummonService = entities => {
  //if no summon time or time is reached, summon a new enemy
  if (!nextSummonTime || nextSummonTime < new Date().getTime()) {
    const id = uuidv4();
    entities[id] = generateEntity();
    console.log('summoned item', entities[id]);
    resetSummonTime();
  }
  return entities;
};

/**
 * function that returns a random item type
 * the chances are 80% for bread and 20% for fork
 * @returns {ItemType}
 */
function randomItemType() {
  const random = Math.random();
  if (random < 0.8) {
    return itemTypes.bread;
  } else {
    return itemTypes.fork;
  }
}

/**
 * function that generates a new entity
 * @returns {ItemEntity}
 */
const generateEntity = () => {
  //random position from 0 + FALLING_RADIUS to the screen width - FALLING_RADIUS
  const x =
    Math.floor(Math.random() * (getGameScreenWidth() - FALLING_RADIUS * 2)) +
    FALLING_RADIUS;
  const y = 120;
  const position = [x, y];
  return new ItemEntity(
    position,
    <FallingItem />,
    FALLING_RADIUS,
    randomItemType(),
  );
};

/**
 * function that resets the summon time
 */
const resetSummonTime = () => {
  nextSummonTime =
    Date.now() + Math.random() * (TIME_MAX - TIME_MIN) + TIME_MIN;
};

export default SummonService;
