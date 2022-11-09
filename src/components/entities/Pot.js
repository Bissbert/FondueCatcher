import React, { PureComponent } from 'react';
import { Image, View } from 'react-native';

const POT_HEIGHT = 60;
const POT_WIDTH = 100;
const BOTTOM = 100;

export default class Pot extends PureComponent<{
  position?: [number],
  width?: number,
  height?: number,
}> {
  render() {
    const x = this.props.position[0] - this.props.width / 2;
    return (
      <View style={[styles.potStyle, { left: x, bottom: BOTTOM }]}>
        <Image
          source={require('../../img/pan.png')}
          style={{
            width: this.props.width,
            height: this.props.height,
          }}
        />
      </View>
    );
  }
}

const getPotWidth = () => POT_WIDTH / 2;

export { getPotWidth, POT_HEIGHT, POT_WIDTH };

const styles = {
  potStyle: {
    position: 'absolute',
    width: POT_WIDTH,
    height: POT_HEIGHT,
    //border shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    zIndex: 1,
  },
};
