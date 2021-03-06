import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

// import defaultImage from '../../img/default.jpg';

const PersonalData = function ({ avatar, tag, name, location }) {
  return (
    <div className={s.description}>
      <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  );
};
PersonalData.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
// PersonalData.defaultProps = {
//   avatar: defaultImage,

// };
const Stats = function ({ stats }) {
  return (
    <ul className={s.statlist}>
      <li className={s.statItem}>
        <span className={s.statlabel}>Followers</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li className={s.statItem}>
        <span className={s.statlabel}>Views</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li className={s.statItem}>
        <span className={s.statlabel}>Likes</span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};
Stats.propTypes = {
  stats: PropTypes.object.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
const Profile = function ({ avatar, tag, name, location, stats }) {
  return (
    <div className={s.profile}>
      <PersonalData
        avatar={avatar}
        tag={tag}
        name={name}
        location={location}
        stats={stats}
      />
      <Stats stats={stats} />
    </div>
  );
};
export default Profile;

// const Profile = function ({avatar, name, location, stats }) {
//     return (
//     <div class="profile">
//   {/* <div class="description">
//     <img
//       src= {user.avatar}
//       alt="Аватар пользователя"
//       class="avatar"
//     />
//     <p class="name">{name}</p>
//     <p class="tag">{tag}</p>
//     <p class="location">{location}</p>
//   </div> */}

//   { <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">{stats.followers}</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">{stats.views}</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">{stats.likes}</span>
//     </li>
//   </ul> }
// </div>
// );

// };

//  Profile.propTypes = {
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     stats: PropTypes.object.isRequired,
// }
// export default Profile;
