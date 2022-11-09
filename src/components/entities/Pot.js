import React, { PureComponent } from 'react';
import { View } from 'react-native';

const BOTTOM = 100;
const POT_RADIUS = 30;

export default class Pot extends PureComponent<{
  position?: [number],
  radius?: number,
}> {
  render() {
    const x = this.props.position[0] - this.props.radius / 2;
    return <View style={[styles.potStyle, { left: x, bottom: BOTTOM }]} />;
  }
}

const getRadius = () => POT_RADIUS / 2;

export { getRadius, POT_RADIUS };

const styles = {
  potStyle: {
    position: 'absolute',
    width: POT_RADIUS * 2,
    height: POT_RADIUS * 2,
    borderBottomLeftRadius: POT_RADIUS * 2,
    borderBottomRightRadius: POT_RADIUS * 2,
    backgroundColor: '#9fff36',
    //border shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    //border
    borderWidth: 1,
    borderColor: '#8bde2f',
  },
};
