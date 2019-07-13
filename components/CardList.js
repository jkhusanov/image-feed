// /* eslint-disable no-unused-expressions */
import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { getImageFromId } from '../utils/api';
import Card from './Card';

const keyExtractor = ({ id }) => id.toString();

const renderItem = ({ item: { id, author } }) => (
  <Card fullname={author} image={{ uri: getImageFromId(id) }} />
);

export default function CardList({ items }) {
  return <FlatList data={items} renderItem={renderItem} keyExtractor={keyExtractor} />;
}

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

renderItem.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};
