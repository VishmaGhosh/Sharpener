import { render, screen } from '@testing-library/react';
import Home from './Home';

describe("Home Component", () => {

    test("Render Inbox", () => {
        render(<Home />)

        const InboxEle = screen.getByText("Inbox");
        expect(InboxEle).toBeInTheDocument();
    })

    test("Render Button Element", () => {
        render(<Home />)

        const BtnEle = screen.getByRole("button");
        expect(BtnEle).toBeInTheDocument();
    })

    test("Render Checjbox", () => {
        render(<Home />)

        const ChkBoxEle = screen.getByRole("checkbox");
        expect(ChkBoxEle).toBeInTheDocument();
    })
})