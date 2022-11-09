import React, { PureComponent } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ItemType } from '../../logic/entities/ItemEntity';

export const FALLING_RADIUS = 30;

export default class FallingItem extends PureComponent<{
  position?: [number, number],
  radius?: number,
  itemType?: ItemType,
}> {
  render() {
    const x = this.props.position[0] - this.props.radius / 2;
    const y = this.props.position[1] - this.props.radius / 2;
    return (
      <View
        style={[
          styles.itemStyle,
          {
            left: x,
            top: y,
          },
        ]}>
        <Image
          source={this.props.itemType.image}
          style={{
            width: this.props.radius * 2,
            height: this.props.radius * 2,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemStyle: {
    borderRadius: FALLING_RADIUS * 2,
    width: FALLING_RADIUS * 2,
    height: FALLING_RADIUS * 2,
    position: 'absolute',
    // border shadow
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
});
