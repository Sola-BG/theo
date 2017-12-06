import React, { Component } from 'react';
import { Button, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { globalStyles } from './globalStyles';

export default class Toolbar extends Component{
  static propTypes = {
    title: PropTypes.string.isRequired,
    leftButtonText: PropTypes.string,
    leftButtonAction: PropTypes.func,
    rightButtonText: PropTypes.string,
    rightButtonAction: PropTypes.func,
  }

  render() {
    const { title, leftButtonText, leftButtonAction, rightButtonText, rightButtonAction } = this.props;
    return <View style={globalStyles.toolbar}>
        {leftButtonText && 
          <Text 
            style={globalStyles.toolbarButton} 
            onPress={() => leftButtonAction()}
          >
            &lt; {leftButtonText}
          </Text>
        }
        <Text style={globalStyles.toolbarTitle}>
          {title}
        </Text>
        {rightButtonText && 
          <Text 
            style={globalStyles.toolbarButton} 
            onPress={() => rightButtonAction()}
          >
            &lt; {rightButtonText}
          </Text>
        }
    </View>
  }
}

