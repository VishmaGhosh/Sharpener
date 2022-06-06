import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Signup from './Signup';

describe("Sig up", () => {
    test("Render Signup  text", () => {
        render(<Signup />)

        const signUpElement = screen.getByText("Signup");
        expect(signUpElement).toBeInTheDocument()
    })

    test("Render email  text", () => {
        render(<Signup />)

        const emailElement = screen.getByText("Email");
        expect(emailElement).toBeInTheDocument()
    })

    test("Render password  text", () => {
        render(<Signup />)

        const passwordElement = screen.getByText("Password");
        expect(passwordElement).toBeInTheDocument()
    })

    test("render Button", () => {
        render(<Signup />)

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument()
    })

    test("render input", () => {
        render(<Signup />)

        const formElement = screen.getAllByRole('form');
        expect(formElement).toBeInTheDocument()
    })

    test('Rendered Post if fetch succeeds', async () => {
        render(<Signup />)

        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => {ok:false}
        })

        const alertItem = await screen.findByRole('alert')
        expect(alertItem).toBeEnabled()
    })

})