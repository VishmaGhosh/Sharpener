import { render, screen } from '@testing-library/react';
import ExpenseList from './ExpenseList'

test('renders Hello World as a text', () => {
    //Arrange
    render(<ExpenseList />)

    //Act
    // ...Nothing

    // Assert
    const downloadElement = screen.getByText('Download Expenses');
    expect(downloadElement).toBeInTheDocument()

});