import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { globalStyles } from './globalStyles';
import Toolbar from './Toolbar';


import { photos } from './data';

export default class VideoScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Videos',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./images/video.png')}
        style={[globalStyles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={globalStyles.container}>
        <Toolbar 
          title={'Videos'}
          leftButtonText={'Back'}
          leftButtonAction={this.props.navigation.goBack}
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