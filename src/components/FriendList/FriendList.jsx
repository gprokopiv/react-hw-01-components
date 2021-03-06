import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendItem = function ({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? `${s.isOnline}` : `${s.isOffline}`}></span>
      <img className={s.avatar} src={avatar} alt=" " width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

const FriendList = function ({ data }) {
  return (
    <ul className={s.friendList}>
      {data.map(datum => (
        <FriendItem
          key={datum.id}
          isOnline={datum.isOnline}
          avatar={datum.avatar}
          name={datum.name}
          // {...data}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;
