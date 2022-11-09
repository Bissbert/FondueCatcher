import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { colors } from './colors';

export default class Footer extends Component {
  render() {
    return (
      <View style={style.footerView}>
        <Text style={style.footerText}>
          © 2022-{getCurrentYear()} Bissbert & Zwazel
        </Text>
      </View>
    );
  }
}

function getCurrentYear() {
  return new Date().getFullYear();
}

const style = {
  footerView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 10,
    textAlign: 'center',
    margin: 5,
    color: colors.text,
  },
};
