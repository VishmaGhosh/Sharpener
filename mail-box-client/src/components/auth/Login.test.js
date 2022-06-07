import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Login from './Login'

describe("Login", () => {

    test("Render Login  text", () => {
        render(<Login />)

        const signUpElement = screen.getByText("Login");
        expect(signUpElement).toBeInTheDocument()
    })

    test("Render email  text", () => {
        render(<Login />)

        const emailElement = screen.getByText("Email");
        expect(emailElement).toBeInTheDocument()
    })

    test("Render password  text", () => {
        render(<Login />)

        const passwordElement = screen.getByText("Password");
        expect(passwordElement).toBeInTheDocument()
    })

    test("render Button", () => {
        render(<Login />)

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument()
    })

    test("render input", () => {
        render(<Login />)

        const formElement = screen.getAllByRole('form');
        expect(formElement).toBeInTheDocument()
    })

    test('Rendered if EmailInput find', async () => {
        render(<Login />)

        const inputEl = await screen.findByTestId('emailInput')
        expect(inputEl).toBeEnabled()
    })

})