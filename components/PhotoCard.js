import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
// import { defaultStyles } from './styles';
import { globalStyles as defaultStyles } from './globalStyles';


// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many photcards we want to have in each row and column
const cols = 2, rows = 3;

export default class PhotoCard extends Component {
  // Component prop types
  static propTypes = {
    // photo object with title, description, and photoUrl
    photo: PropTypes.object.isRequired,
    // Called when user taps on a photoUrl
    onOpen: PropTypes.func.isRequired,
  }
  render() {
    const { photo, photo: { title, photoCount, photoUrl }, onOpen } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => onOpen(photo)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: photoUrl }} style={styles.image} />
        </View>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.photoCount} numberOfLines={1}>{photoCount}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
  },
  imageContainer: {
    flex: 1,                          // take up all available space
  },
  image: {
    borderRadius: 10,                 // rounded corners
    ...StyleSheet.absoluteFillObject, // fill up all space in a container
  },
  title: {
    fontFamily: 'Avenir',
    fontSize: 14,
    marginTop: 4,
  },
  photoCount: {
    fontFamily: 'Avenir',
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  },
});