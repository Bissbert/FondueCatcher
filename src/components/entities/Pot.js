import React, { PureComponent } from 'react';
import { View } from 'react-native';

const RADIUS = 20;

export default class Pot extends PureComponent<{
  position: [number, number],
}> {
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    return <View style={[styles.potStyle, { left: x, bottom: 100 }]} />;
  }
}

const styles = {
  potStyle: {
    position: 'absolute',
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderBottomLeftRadius: RADIUS * 2,
    borderBottomRightRadius: RADIUS * 2,
    backgroundColor: 'green',
  },
};
