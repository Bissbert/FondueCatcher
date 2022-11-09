import FallingItem from '../../components/entities/FallingItem';
import { PureComponent } from 'react';

class Entity {
  position: [number, number];
  renderer: PureComponent;

  constructor(position: [number, number], renderer: PureComponent) {
    this.position = position;
    this.renderer = renderer;
  }
}

class ItemEntity extends Entity {
  radius: number;
  velocity: number;
  itemType: ItemType;

  constructor(
    position: [number, number],
    renderer: FallingItem,
    radius: number,
    velocity: number,
    itemType: ItemType,
  ) {
    super(position, renderer);
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
