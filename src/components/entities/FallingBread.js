import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';

export const FALLING_RADIUS = 20;

export default class FallingBread extends PureComponent<{
  position?: [number, number],
  radius?: number,
}> {
  render() {
    const x = this.props.position[0] - this.props.radius / 2;
    const y = this.props.position[1] - this.props.radius / 2;
    return <View style={[styles.breadStyle, { left: x, top: y }]} />;
  }
}

const styles = StyleSheet.create({
  breadStyle: {
    borderColor: '#CCC',
    borderWidth: 4,
    borderRadius: FALLING_RADIUS * 2,
    width: FALLING_RADIUS * 2,
    height: FALLING_RADIUS * 2,
    backgroundColor: 'pink',
    position: 'absolute',
  },
});
