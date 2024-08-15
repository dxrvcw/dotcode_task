import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { useDesktopItems } from '../../hooks/useDesktopItems'
import { InteractiveDesktop } from './InteractiveDesktop'

vi.mock('../../hooks/useDesktopItems', () => ({
	useDesktopItems: vi.fn().mockReturnValue({
		items: [{ i: '1', x: 0, y: 0, w: 1, h: 1 }],
		setItems: vi.fn(),
		resetItems: vi.fn(),
		removeItem: vi.fn(),
		selectedItemId: null,
		setSelectedItemId: vi.fn(),
	}),
}))

describe('InteractiveDesktop Component', () => {
	test('renders with items and button', () => {
		render(<InteractiveDesktop />)

		expect(screen.getByText('Reset items')).toBeInTheDocument()

		expect(screen.getByText('Title 1')).toBeInTheDocument()
	})

	test('calls resetItems on button click', () => {
		const { resetItems } = useDesktopItems()
		render(<InteractiveDesktop />)

		fireEvent.click(screen.getByText('Reset items'))

		expect(resetItems).toHaveBeenCalled()
	})
})
