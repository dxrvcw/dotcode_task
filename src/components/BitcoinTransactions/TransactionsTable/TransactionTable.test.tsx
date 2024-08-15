import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Transaction } from '../../../utils/types'
import { TransactionTable } from './TransactionsTable'

describe('TransactionTable Component', () => {
	const transactions: Transaction[] = [
		{ id: '1', amount: 0.1, from: 'Alice', to: 'Bob' },
		{ id: '2', amount: 0.5, from: 'Charlie', to: 'Dave' },
	]

	test('renders transaction rows correctly', () => {
		render(<TransactionTable transactions={transactions} />)

		expect(screen.getByText('From:')).toBeInTheDocument()
		expect(screen.getByText('To:')).toBeInTheDocument()
		expect(screen.getByText('Amount:')).toBeInTheDocument()

		transactions.forEach(transaction => {
			expect(
				screen.getByText(transaction.amount.toString())
			).toBeInTheDocument()
			expect(screen.getByText(transaction.from)).toBeInTheDocument()
			expect(screen.getByText(transaction.to)).toBeInTheDocument()
		})
	})
})
