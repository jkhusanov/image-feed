import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import AuthorRow from './AuthorRow';

export default function Card({ fullname, image, linkText, onPressLinkText }) {
  return (
    <View>
      <AuthorRow fullname={fullname} linkText={linkText} onPressLinkText={onPressLinkText} />
      <Image style={styles.image} source={image} />
    </View>
  );
}

Card.propTypes = {
  fullname: PropTypes.string.isRequired,
  image: Image.propTypes.source.isRequired,
  linkText: PropTypes.string,
  onPressLinkText: PropTypes.func,
};

Card.defaultProps = {
  linkText: '',
  onPressLinkText: () => {},
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
});
