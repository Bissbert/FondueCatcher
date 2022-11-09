let gameScreenWidth = 0;
let gameScreenHeight = 0;

const getGameScreenWidth = () => gameScreenWidth;

const getGameScreenHeight = () => gameScreenHeight;

const setGameScreenWidth = (size: number) => {
  console.log('setGameScreenSize', size);
  gameScreenWidth = size;
};

const setGameScreenHeight = (size: number) => {
  console.log('setGameScreenHeight', size);
  gameScreenHeight = size;
};

export {
  getGameScreenWidth,
  setGameScreenWidth,
  getGameScreenHeight,
  setGameScreenHeight,
};
