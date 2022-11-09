import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { colors } from '../colors';

export default class PointCounter extends Component<{
  points: number,
  style?:
    | (number & { __registeredStyleBrand: ViewStyle })
    | RecursiveArray<RegisteredStyle<ViewStyle> | Falsy | ViewStyle>
    | false
    | ViewStyle,
}> {
  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.pointLabel}>Points</Text>
        <Text style={styles.pointText}>{this.props.points}</Text>
      </View>
    );
  }
}

const styles = {
  pointLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  pointText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
};
