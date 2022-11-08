import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from './colors';
import { possiblePages } from './possiblePages';

export default class Header extends Component<{
  showBack: boolean,
  setPage: string => void,
  setBackground: string => void,
}> {
  render() {
    return (
      <View style={style.parent}>
        <View
          style={{
            ...style.backView,
            display: this.props.showBack ? 'flex' : 'none',
          }}>
          <View style={style.innerBackView}>
            <TouchableOpacity
              underlayColor="white"
              onPress={() => {
                this.props.setBackground(colors.background);
                this.props.setPage(possiblePages.home);
              }}>
              <Text style={style.backTextStyle}>&#10005;</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.titleView}>
          <Text style={style.textStyle}>Fondue Catcher</Text>
        </View>
      </View>
    );
  }
}

//header style
//the view container is absolutely positioned at the top of the screen
//the text is centered within the view container
const style = {
  parent: {
    zIndex: 1,
    width: '100%',
    position: 'absolute',
  },
  textStyle: {
    fontSize: 30,
    color: colors.text,
    fontWeight: 'bold',
  },
  backView: {
    zIndex: 2,
    height: 60,
    paddingTop: 15,
    paddingLeft: 35,
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  innerBackView: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backTextStyle: {
    fontSize: 20,
    color: colors.text,
  },
  titleView: {
    width: '100%',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
