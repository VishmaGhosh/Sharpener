import { render, screen } from "@testing-library/react";
import InboxItem from "./InboxItem";

describe("Inbox Item Component", () => {
    test("renter Time Text ", () => {
        render(<InboxItem />)

        const timeEle = screen.getByText("Time");
        expect(timeEle).toBeInTheDocument();
    })

    test("Render List", () => {
        render(<InboxItem />)

        const listEle = screen.getByRole("listitem")
        expect(listEle).toBeInTheDocument();
    })
})