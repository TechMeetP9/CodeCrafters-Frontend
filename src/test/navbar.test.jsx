import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import { vi } from 'vitest'


vi.mock('../components/modal/Modal', () => ({
    default: ({ children, isOpen }) => (isOpen ? <div>{children}</div> : null),
}))

const renderWithRouter = (ui) =>
    render(<BrowserRouter>{ui}</BrowserRouter>)

describe('Navbar', () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    test('click en Log in abre el modal de Login', async () => {
        const user = userEvent.setup()
        renderWithRouter(<Navbar />)

        expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument()
        await user.click(screen.getByRole('button', { name: /log in/i }))
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    })

    test('click en Sign up abre el modal de SignUp', async () => {
        const user = userEvent.setup()
        renderWithRouter(<Navbar />)

        expect(screen.queryByLabelText(/name/i)).not.toBeInTheDocument()
        await user.click(screen.getByRole('button', { name: /sign up/i }))
        expect(screen.getByLabelText(/^Name\*$/i)).toBeInTheDocument()
    })
})