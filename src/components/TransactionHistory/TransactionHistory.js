import React from "react";
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
   <table className={styles.transaction_history}>
      <thead>
         <tr>
            <th className={styles.head_item}>Type</th>
            <th className={styles.head_item}>Amount</th>
            <th className={styles.head_item}>Currency</th>
         </tr>
      </thead>

      <tbody>
         {items.map(item => (
            <tr key={item.id}>
               <td className={styles.type_item}>{item.type}</td>
               <td className={styles.amount_item}>{item.amount}</td>
               <td className={styles.currency_item}>{item.currency}</td>
            </tr>
         ))}
      </tbody>
   </table>);

TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         type: PropTypes.string.isRequired,
         amount: PropTypes.number.isRequired,
         currency: PropTypes.string.isRequired,
      }),
   ),
};
export default TransactionHistory;