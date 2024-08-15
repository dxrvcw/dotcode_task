import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TransactionRow } from './TransactionRow'

describe('TransactionRow Component', () => {
	test('renders transaction details correctly', () => {
		const from = 'Alice'
		const to = 'Bob'
		const amount = 0.1

		render(<TransactionRow from={from} to={to} amount={amount} />)

		expect(screen.getByText(from)).toBeInTheDocument()
		expect(screen.getByText(to)).toBeInTheDocument()
		expect(screen.getByText(amount.toString())).toBeInTheDocument()
	})
})
