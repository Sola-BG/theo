import React from 'react';
import { Image, Text, View } from 'react-native';
import { globalStyles } from './globalStyles';
import Toolbar from './Toolbar';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./images/settings.png')}
        style={[globalStyles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={globalStyles.container}>
        <Toolbar 
          title={'Settings'}
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