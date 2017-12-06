import React from 'react';
import { Button, Image, Text, View } from 'react-native';

import { globalStyles } from './globalStyles';
import Toolbar from './Toolbar';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'About',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./images/about.png')}
        style={[globalStyles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={globalStyles.container}>
        <Toolbar 
          title={'About'}
          leftButtonText={'Back'}
          leftButtonAction={this.goBack}
        />
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
        </View>
        <View style={{flex: 4, backgroundColor: 'skyblue'}} >
        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}