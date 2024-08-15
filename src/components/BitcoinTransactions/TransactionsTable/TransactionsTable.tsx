import { Fragment } from "react/jsx-runtime";
import { Transaction } from "../../../utils/types";

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
        <Fragment key={transaction.id}>
          <p className={styles.dataText}>{transaction.from}</p>
          <p className={styles.dataText}>{transaction.to}</p>
          <p className={styles.dataText}>{transaction.amount}</p>
        </Fragment>
      ))}
    </div>
  );
}
