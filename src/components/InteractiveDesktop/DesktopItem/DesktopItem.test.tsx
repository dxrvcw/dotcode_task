import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { DesktopItem } from './DesktopItem'

vi.mock('*.module.css', () => ({}))

describe('DesktopItem Component', () => {
	test('renders with title', () => {
		const removeItem = vi.fn()
		render(
			<DesktopItem
				id='1'
				title='Item Title'
				selected={true}
				removeItem={removeItem}
			>
				<div>Child Content</div>
			</DesktopItem>
		)

		expect(screen.getByText('Item Title')).toBeInTheDocument()
		expect(screen.getByText('Child Content')).toBeInTheDocument()
	})

	test('calls removeItem when delete button is clicked', () => {
		const removeItem = vi.fn()
		render(
			<DesktopItem
				id='1'
				title='Item Title'
				selected={false}
				removeItem={removeItem}
			/>
		)

		fireEvent.click(screen.getByRole('button'))
		expect(removeItem).toHaveBeenCalledWith('1')
	})
})
