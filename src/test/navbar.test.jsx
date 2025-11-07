import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '../components/navbar/navbar'


vi.mock('../modal/Modal', () => ({
    default: ({ children, isOpen }) => (isOpen ? <div>{children}</div> : null),
}))

describe('Navbar', () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    test('click en Log in abre el modal de Login', async () => {
        const user = userEvent.setup()
        render(<Navbar />)

        // Antes del click no debe estar el campo Email
        expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument()

        // Click en el botón "Log in"
        await user.click(screen.getByRole('button', { name: /log in/i }))

        // Ahora debe aparecer el input Email (que está dentro del modal)
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    })

    test('click en Sign up abre el modal de SignUp', async () => {
        const user = userEvent.setup()
        render(<Navbar />)

        // Antes del click no debe estar el campo Name
        expect(screen.queryByLabelText(/name/i)).not.toBeInTheDocument()

        // Click en el botón "Sign up"
        await user.click(screen.getByRole('button', { name: /sign up/i }))

        // Ahora debe aparecer el input Name (que está dentro del modal)
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    })
})