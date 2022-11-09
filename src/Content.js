import React, { Component } from 'react';
import { View } from 'react-native';
import { possiblePages } from './possiblePages';
import GameScreen from './pages/GameScreen';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Leaderboard from './pages/Leaderboard';

export default class Content extends Component<{
  setBackMark: boolean => void,
  page: string,
  setPage: string => void,
  setBackground: string => void,
}> {
  content = null;

  render() {
    return <View style={{ flex: 1 }}>{this.content}</View>;
  }

  componentDidUpdate(
    prevProps: Readonly<{
      setBackMark: boolean => void,
      page: string,
    }>,
    prevState: Readonly<{
      setBackMark: boolean => void,
      page: string,
    }>,
  ) {
    const { page, setBackMark } = this.props;
    if (prevProps.page !== page) {
      this.setContentFromPage(page, setBackMark);
      //log page change
      console.log('page changed from', prevProps.page, 'to', page);
    }
  }

  componentDidMount() {
    const { page, setBackMark } = this.props;
    this.setContentFromPage(page, setBackMark);
    console.log('page changed from', 'null', 'to', page);
  }

  setContentFromPage = (page: string, setBackMark: boolean => void) => {
    if (page === possiblePages.home) {
      setBackMark(false);
    } else {
      setBackMark(true);
    }
    switch (page) {
      case possiblePages.game:
        this.content = <GameScreen setBackground={this.props.setBackground} />;
        break;
      case possiblePages.settings:
        this.content = <Settings />;
        break;
      case possiblePages.leaderboard:
        this.content = <Leaderboard />;
        break;
      default:
        this.content = <Home setPage={this.props.setPage} />;
        break;
    }
  };
}
