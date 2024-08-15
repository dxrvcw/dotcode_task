import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Mock, vi } from 'vitest'
import { useBitcoinTransactions } from '../../hooks/useBitcoinTransactions'
import { BitcoinTransactions } from './BitcoinTransactions'

vi.mock('../../hooks/useBitcoinTransactions', () => ({
	useBitcoinTransactions: vi.fn(),
}))

describe('BitcoinTransactions Component', () => {
	const startSubscription = vi.fn()
	const stopSubscription = vi.fn()
	const resetData = vi.fn()

	beforeEach(() => {
		;(useBitcoinTransactions as unknown as Mock).mockReturnValue({
			transactions: [],
			totalAmount: 0,
			startSubscription,
			stopSubscription,
			resetData,
		})
	})

	test('renders buttons and calls appropriate functions on click', () => {
		render(<BitcoinTransactions />)

		expect(screen.getByText('Start')).toBeInTheDocument()
		expect(screen.getByText('Stop')).toBeInTheDocument()
		expect(screen.getByText('Reset')).toBeInTheDocument()

		fireEvent.click(screen.getByText('Start'))
		expect(startSubscription).toHaveBeenCalledTimes(1)

		fireEvent.click(screen.getByText('Stop'))
		expect(stopSubscription).toHaveBeenCalledTimes(1)

		fireEvent.click(screen.getByText('Reset'))
		expect(resetData).toHaveBeenCalledTimes(1)
	})
})
