import { Transaction } from "../../../utils/types";

import { TransactionRow } from "./TransactionRow/TransactionRow";
import styles from "./TransactionsTable.module.css";

interface ITransactionTable {
  transactions: Transaction[];
}

export function TransactionTable({ transactions }: ITransactionTable) {
  return (
    <div className={styles.container}>
      <p className={styles.headerText}>From:</p>
      <p className={styles.headerText}>To:</p>
      <p className={styles.headerText}>Amount:</p>
      {transactions.map((transaction) => (
        <TransactionRow
          key={transaction.id}
          amount={transaction.amount}
          from={transaction.from}
          to={transaction.to}
        />
      ))}
    </div>
  );
}
