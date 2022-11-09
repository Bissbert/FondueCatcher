const FallDown = entities => {
  const keys = Object.keys(entities);
  //remove pot from keys
  const potIndex = keys.indexOf('pot');
  keys.splice(potIndex, 1);

  keys.forEach(key => {
    console.log(key, entities[key]);
    entities[key].position[1] += 1;
  });

  return entities;
};

export { FallDown };
