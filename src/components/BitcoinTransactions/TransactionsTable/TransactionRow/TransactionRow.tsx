import styles from './TransactionRow.module.css'

interface ITransactionRow {
	from: string
	to: string
	amount: number
}

export function TransactionRow({ from, to, amount }: ITransactionRow) {
	return (
		<>
			<p className={styles.dataText}>{from}</p>
			<p className={styles.dataText}>{to}</p>
			<p className={styles.dataText}>{amount}</p>
		</>
	)
}
