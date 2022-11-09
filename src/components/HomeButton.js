import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { colors } from '../colors';

export default class HomeButton extends Component<{
  onClick: () => void,
}> {
  render() {
    return (
      <TouchableHighlight
        style={styles.buttonContainer}
        underlayColor={'rgba(0,0,0,0.1)'}
        onPress={this.props.onClick}>
        <View>
          <Text style={styles.contentText}>
            {this.props.children ? this.props.children : '---'}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  buttonContainer: {
    zIndex: 3,
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
