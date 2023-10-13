import { Transaction } from '../Transaction/Transaction';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <div className={css.tableContainer}>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => {
            return (
              <Transaction
                key={transaction.id}
                transactionType={transaction.type}
                transactionAmount={transaction.amount}
                transactionCurrency={transaction.currency}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
