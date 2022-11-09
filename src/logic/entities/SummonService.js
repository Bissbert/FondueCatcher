import { getGameScreenWidth } from '../gameScreenSize';
import FallingBread, { FALLING_RADIUS } from '../../components/entities/FallingBread';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

let nextSummonTime: number;

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
  //set the new summon time to be a random number between 1 and 4 seconds
  nextSummonTime = Date.now() + Math.random() * 3000 + 1000;
};

export default SummonService;
