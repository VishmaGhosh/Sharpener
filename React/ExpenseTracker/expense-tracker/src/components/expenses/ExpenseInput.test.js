import { render, screen } from '@testing-library/react';
import ExpenseInput from './ExpenseInput'

test('renders Hello World as a text', () => {
    //Arrange
    render(<ExpenseInput />)

    //Act
    // ...Nothing

    // Assert
    const descriptionElement = screen.getByText('Description');
    expect(descriptionElement).toBeInTheDocument()

});