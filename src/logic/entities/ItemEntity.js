import FallingItem from '../../components/entities/FallingItem';
import { PureComponent } from 'react';

class Entity {
  position: [number, number];
  renderer: PureComponent;
  id: string;

  constructor(id: string, position: [number, number], renderer: PureComponent) {
    this.position = position;
    this.renderer = renderer;
    this.id = id;
  }
}

class ItemEntity extends Entity {
  radius: number;
  velocity: number;
  itemType: ItemType;

  constructor(
    id: string,
    position: [number, number],
    renderer: FallingItem,
    radius: number,
    velocity: number,
    itemType: ItemType,
  ) {
    super(id, position, renderer);
    this.radius = radius;
    this.velocity = velocity;
    this.itemType = itemType;
  }
}

class ItemType {
  name: string;
  image; //name of the file in the image dir
  points: number;

  constructor(name: string, image, points: number) {
    this.name = name;
    this.image = image;
    this.points = points;
  }
}

const itemTypes = {
  bread: new ItemType('bread', require('../../img/bread.png'), 1),
  fork: new ItemType('fork', require('../../img/fork.png'), -1),
};

export { ItemEntity, ItemType, itemTypes };
