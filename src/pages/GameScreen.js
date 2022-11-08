import React, { Component } from 'react';
import { View } from 'react-native';
import { colors } from '../colors';
import { GameEngine } from 'react-native-game-engine';

export default class GameScreen extends Component<{
  setBackground: (color: string) => void,
}> {
  render() {
    return (
      <View style={styles.container}>
        <GameEngine style={styles.gameContainer} systems={[]} entities={{}} />
      </View>
    );
  }

  componentDidMount() {
    this.props.setBackground(colors.grassGreen);
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.grassGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
