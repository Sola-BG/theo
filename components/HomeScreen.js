import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { globalStyles as globalStyles } from './globalStyles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./images/home.png')}
        style={[globalStyles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
        <Image 
          source={require('./images/theo.jpg')}
          style={styles.backgroundImage}
        >
          <View>
            <Text style={styles.title}>Theo</Text>
            <Text style={styles.title}>Oderinde</Text>
          </View>
        </Image>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flexGrow: 1,
    margin: 0,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },
  theoImage: {
    width: 250,
    height: 450,
  },
  title: {
    fontSize:36,
    color:'steelblue',
    textAlign:'center',
    fontWeight:'bold',
    fontFamily:'Didot-Italic',
    marginBottom:20
  }
});