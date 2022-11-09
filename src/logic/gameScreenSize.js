let gameScreenSize = 0;

const getGameScreenSize = () => gameScreenSize;

const setGameScreenSize = (size: number) => {
  console.log('setGameScreenSize', size);
  gameScreenSize = size;
};

export { getGameScreenSize, setGameScreenSize };
