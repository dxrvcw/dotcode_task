import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { Header } from './Header'

const renderHeaderWithRoute = (route: string) => {
	render(
		<MemoryRouter initialEntries={[route]}>
			<Routes>
				<Route path='/' element={<Header />} />
				<Route path='/transactions' element={<Header />} />
			</Routes>
		</MemoryRouter>
	)
}

describe('Header', () => {
	test('Render links', () => {
		renderHeaderWithRoute('/')

		expect(screen.getByText('Interactive desktop')).toBeInTheDocument()
		expect(screen.getByText('Transactions')).toBeInTheDocument()
	})
})
