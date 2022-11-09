const MovePot = (entities, { touches }) => {
  const pot = entities.pot;
  touches
    .filter(t => t.type === 'move')
    .forEach(t => {
      console.log(pot);
      if (pot && pot.position) {
        console.log('moving pot from', pot.position[0], 'to', t.event.pageX);
        pot.position = [pot.position[0] + t.delta.pageX];
      }
    });
  return entities;
};

export { MovePot };
