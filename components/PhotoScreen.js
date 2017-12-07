import React from 'react';
import { Button, Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import { globalStyles as globalStyles } from './globalStyles';

import { photos } from './data-photos';
import PhotoCard from './PhotoCard';

export default class PhotoScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Photos',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./images/photo.png')}
        style={[globalStyles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  // Add starting here
  state = {
    popupIsOpen: false,
  }

  openPhoto = (photo) => {
    this.setState({
      popupIsOpen: true,
      photo,	
    });
  }

  closePhoto = () => {
    this.setState({
      popupIsOpen: false,
    });
  }

  render() {
    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.toolbar}>
            <Text style={globalStyles.toolbarButton}></Text>
            <Text style={globalStyles.toolbarTitle}>Albums</Text>
            <Text style={globalStyles.toolbarButton}></Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
		      // Hide all scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {photos.map((photo, index) => <PhotoCard
            photo={photo}
            onOpen={this.openPhoto}
            key={index}
          />)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollContent: {
    flexDirection: 'row',   // arrange photocards in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});