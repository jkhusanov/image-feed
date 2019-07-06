import React from 'react';
import { View, Text, StyleSheet, ColorPropType } from 'react-native';
import PropTypes from 'prop-types';

export default function Avatar({ size, backgroundColor, initials }) {
  const style = { width: size, height: size, borderRadius: size / 2, backgroundColor };

  return <View style={style} />;
}

Avatar.propTypes = {
  size: PropTypes.number.isRequired,
  backgroundColor: ColorPropType.isRequired,
  initials: PropTypes.string.isRequired,
};
