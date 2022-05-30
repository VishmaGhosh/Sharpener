import { render, screen } from '@testing-library/react';
import ExpenseList from './ExpenseList'

describe('Expense List', () => {
    test('renders Hello World as a text', () => {
        //Arrange
        render(<ExpenseList />)
        //Act
        // ...Nothing

        // Assert
        const downloadElement = screen.getByRole('button').innerHTML;
        expect(downloadElement).toBeInTheDocument()

    });
})
