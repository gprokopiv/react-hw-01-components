import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import RandomColor from './RandomColor';

const StatisticalItem = function ({ statlabel, statpercent }) {
  return (
    <li
      className={s.item}
      style={{
        backgroundColor: `${RandomColor()}`,
      }}
    >
      <span className={s.label}>{statlabel}</span>
      <span className={s.percentage}>{statpercent}%</span>
    </li>
  );
};

StatisticalItem.propTypes = {
  statlabel: PropTypes.string.isRequired,
  statpercent: PropTypes.number.isRequired,
};

const StatisticalList = function ({ stats }) {
  return (
    <ul className={s.list}>
      {stats.map(stat => (
        <StatisticalItem
          key={stat.id}
          statlabel={stat.label}
          statpercent={stat.percentage}
        />
      ))}
    </ul>
  );
};
StatisticalList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

const Statistics = function ({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <StatisticalList stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
