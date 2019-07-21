// /* eslint-disable no-unused-expressions */
import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { getImageFromId } from '../utils/api';
import Card from './Card';

const keyExtractor = ({ id }) => id.toString();

export default function CardList({ items, commentsForItem, onPressComments }) {
  // eslint-disable-next-line react/prop-types
  const renderItem = ({ item: { id, author } }) => {
    const comments = commentsForItem[id];
    return (
      <Card
        fullname={author}
        image={{ uri: getImageFromId(id) }}
        linkText={`${comments ? comments.length : 0} Comments`}
        onPressLinkText={() => onPressComments(id)}
      />
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      extraData={commentsForItem}
    />
  );
}

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
  commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onPressComments: PropTypes.func.isRequired,
};
