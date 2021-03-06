import React from 'react';
import PropTypes from 'prop-types';
import s from './Transaction.module.css';

const TransactionItem = function ({ itemType, itemAmount, itemCurrency }) {
  return (
    <tr className={s.row}>
      <td className={s.item}>{itemType}</td>
      <td className={s.item}>{itemAmount}</td>
      <td className={s.item}>{itemCurrency}</td>
    </tr>
  );
};
TransactionItem.propTypes = {
  itemType: PropTypes.string.isRequired,
  itemAmount: PropTypes.string.isRequired,
  itemCurrency: PropTypes.string.isRequired,
};
const TransactionList = function ({ items }) {
  return (
    <tbody>
      {items.map(item => (
        <TransactionItem
          key={item.id}
          itemType={item.type}
          itemAmount={item.amount}
          itemCurrency={item.currency}
        />
      ))}
    </tbody>
  );
};

TransactionList.propTypes = {
  // items: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //   }),
  // ),
  items: PropTypes.array.isRequired,
};
const TransactionHistory = function ({ items }) {
  return (
    <table className={s.history}>
      <thead>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>

      <TransactionList items={items} />
    </table>
  );
};
export default TransactionHistory;

