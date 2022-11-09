import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { colors } from '../colors';
import { GameEngine } from 'react-native-game-engine';
import PointCounter from '../components/PointCounter';
import PointManagement from '../logic/PointManagement';
import { FallDown } from '../logic/entities/FallDown';
import { FallingBread } from '../components/entities/FallingBread';

export default class GameScreen extends Component<{
  setBackground: (color: string) => void,
}> {
  pointManagement;

  constructor(props) {
    super(props);
    this.pointManagement = new PointManagement(this.setState.bind(this));
    this.state = {
      running: true,
      points: this.pointManagement.points,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <PointCounter
          points={this.state.points}
          style={styles.pointContainer}
        />
        <GameEngine
          style={styles.gameContainer}
          systems={[FallDown]}
          entities={{
            1: { position: [40, 200], renderer: <FallingBread /> },
            2: { position: [40, 200], renderer: <FallingBread /> },
            3: { position: [40, 200], renderer: <FallingBread /> },
            4: { position: [40, 200], renderer: <FallingBread /> },
            5: { position: [40, 200], renderer: <FallingBread /> },
          }}
        />
      </View>
    );
  }

  increasePoint = (amount: number) => {
    if (!amount || isNaN(amount)) {
      amount = 1;
    }
    this.pointManagement.incrementPoints(amount);
  };

  resetPoints = () => {
    this.pointManagement.resetPoints();
  };

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
  gameContainer: {
    flex: 1,
    width: '100%',
  },
  pointContainer: {
    position: 'absolute',
    top: 70,
    zIndex: 1,
    alignItems: 'center',
  },
};
