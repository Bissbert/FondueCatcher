import { getGameScreenWidth } from '../gameScreenSize';
import FallingBread, { FALLING_RADIUS } from '../../components/entities/FallingBread';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

let nextSummonTime: number;

//times for summoning in milliseconds
const TIME_MIN = 1000;
const TIME_MAX = 4000;

const SummonService = entities => {
  //if no summon time or time is reached, summon a new enemy
  if (!nextSummonTime || nextSummonTime < new Date().getTime()) {
    const id = uuidv4();
    //random position from 0 + FALLING_RADIUS to the screen width - FALLING_RADIUS
    const x =
      Math.floor(Math.random() * (getGameScreenWidth() - FALLING_RADIUS * 2)) +
      FALLING_RADIUS;
    const y = 100;
    const position = [x, y];
    entities[id] = {
      position: position,
      radius: FALLING_RADIUS,
      renderer: <FallingBread />,
    };
    resetSummonTime();
  }
  return entities;
};

const resetSummonTime = () => {
  nextSummonTime =
    Date.now() + Math.random() * (TIME_MAX - TIME_MIN) + TIME_MIN;
};

export default SummonService;
