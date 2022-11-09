import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { colors } from '../colors';
import HomeButton from '../components/HomeButton';
import { possiblePages } from '../possiblePages';

export default class Home extends Component<{ setPage: string => void }> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Home</Text>
          </View>
          <View style={styles.content}>
            <HomeButton
              onClick={() => {
                this.props.setPage(possiblePages.game);
              }}>
              Start Game
            </HomeButton>
            <HomeButton
              onClick={() => {
                this.props.setPage(possiblePages.leaderboard);
              }}>
              Leaderboard
            </HomeButton>
            <HomeButton
              onClick={() => {
                this.props.setPage(possiblePages.settings);
              }}>
              Settings
            </HomeButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    marginTop: 80,
  },
  innerContainer: {
    backgroundColor: colors.background,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.border,
    width: '80%',
    height: '93%',
    padding: 5,
  },
  header: {
    backgroundColor: colors.background,
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: colors.text,
    fontSize: 25,
  },
  content: {
    backgroundColor: colors.background,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: colors.button,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.border,
    width: '80%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  contentText: {
    color: colors.text,
    fontSize: 15,
  },
};
