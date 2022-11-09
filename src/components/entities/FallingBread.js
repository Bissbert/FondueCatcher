import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';

const RADIUS = 20;

class FallingBread extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    return <View style={[styles.bread, { left: x, top: y }]} />;
  }
}

const styles = StyleSheet.create({
  bread: {
    borderColor: '#CCC',
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: 'pink',
    position: 'absolute',
  },
});

export { FallingBread };
