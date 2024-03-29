import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

export default function CommentList({ items }) {
  const renderItem = (item, index) => (
    <View key={index} style={styles.comment}>
      <Text>{item}</Text>
    </View>
  );

  return <ScrollView>{items.map(renderItem)}</ScrollView>;
}

CommentList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const styles = StyleSheet.create({
  comment: {
    marginLeft: 20,
    paddingVertical: 20,
    paddingRight: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});
