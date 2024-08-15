import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { Button } from './Button'

describe('Button Component', () => {
	test('renders with given children and className', () => {
		const handleClick = vi.fn()
		render(
			<Button className='custom-class' onClick={handleClick}>
				Click Me
			</Button>
		)

		expect(screen.getByText('Click Me')).toBeInTheDocument()
		expect(screen.getByText('Click Me')).toHaveClass('custom-class')
	})

	test('calls onClick handler when clicked', () => {
		const handleClick = vi.fn()
		render(<Button onClick={handleClick}>Click Me</Button>)

		fireEvent.click(screen.getByText('Click Me'))

		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
