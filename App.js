import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import PhotoScreen from './components/PhotoScreen';
import AboutScreen from './components/AboutScreen';
import ContactScreen from './components/ContactScreen';
import SettingsScreen from './components/SettingsScreen';


// import { Root, Tabs } from './config/router';

export default class App extends React.Component {
  render() {
    return (
      <MyApp/>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MyApp = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen
  },
  Photos: {
    screen: PhotoScreen,
  },
  Contact: {
    screen: ContactScreen
  },
  Settings: {
    screen: SettingsScreen
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'steelblue',
    showIcon: true
  },
});
