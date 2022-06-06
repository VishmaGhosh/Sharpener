import { render, screen } from '@testing-library/react';
import SendEmailForm from './SendEmailForm';


describe("Send Email Form", () => {
    test("Render To: Text", () => {
        render(<SendEmailForm />)

        const toEle = screen.getByText("To:", { exact: false })
        expect(toEle).toBeInTheDocument();
    })

    test("Render Input Element", () => {
        render(<SendEmailForm />)

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument()
    })

    test("Render Input Element", async () => {
        render(<SendEmailForm />)

        const inputEl = screen.getByTestId("email-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "email");
    })

   
})