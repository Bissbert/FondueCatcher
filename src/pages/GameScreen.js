import React, { Component } from 'react';
import { View } from 'react-native';
import { colors } from '../colors';
import { DefaultTimer, GameEngine } from 'react-native-game-engine';
import PointCounter from '../components/PointCounter';
import PointManagement from '../logic/PointManagement';
import { MovePot } from '../logic/entities/PotMovement';
import Pot, { POT_RADIUS } from '../components/entities/Pot';
import { setGameScreenHeight, setGameScreenWidth } from '../logic/gameScreenSize';
import { FallDown } from '../logic/entities/FallDown';
import SummonService from '../logic/entities/SummonService';

export default class GameScreen extends Component<{
  setBackground: (color: string) => void,
}> {
  pointManagement;
  timer: DefaultTimer = new DefaultTimer();
  constructor(props) {
    super(props);
    this.pointManagement = new PointManagement(this.setState.bind(this));
    this.state = {
      running: true,
      points: this.pointManagement.points,
    };
    //set the timer to 90fps
  }

  render() {
    return (
      <View style={styles.container}>
        <PointCounter
          points={this.state.points}
          style={styles.pointContainer}
        />
        <View
          style={styles.gameContainer}
          onLayout={event => {
            const { width, height } = event.nativeEvent.layout;
            setGameScreenWidth(width);
            setGameScreenHeight(height);
          }}>
          <GameEngine
            style={styles.gameContainer}
            systems={[MovePot, FallDown, SummonService]}
            entities={{
              pot: {
                position: [100, 100],
                radius: POT_RADIUS,
                renderer: <Pot />,
              },
            }}
            running={this.state.running}
          />
        </View>
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
