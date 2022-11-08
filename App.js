/**
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import { possiblePages } from './src/possiblePages';
import { colors } from './src/colors';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backShown: false,
      page: possiblePages.game,
      background: colors.grassGreen,
    };
    this.setBackShown = this.setBackShown.bind(this);
    this.setPage = this.setPage.bind(this);
    this.setBackground = this.setBackground.bind(this);
  }

  setBackShown = backShown => {
    this.setState({ backShown });
  };

  setPage = page => {
    this.setState({ page });
  };

  setBackground = background => {
    this.setState({ background });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: this.state.background }}>
        <View style={{ flex: 1 }}>
          <Header
            showBack={this.state.backShown}
            setPage={this.setPage}
            setBackground={this.setBackground}
          />
          <Content
            page={this.state.page}
            setBackMark={this.setBackShown}
            setPage={this.setPage}
            setBackground={this.setBackground}
          />
          <Footer />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
