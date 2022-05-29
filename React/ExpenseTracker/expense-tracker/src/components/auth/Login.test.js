import { render, screen } from '@testing-library/react';
import Login from './Login'

test('renders Login as a text', () => {
    //Arrange
    render(<Login />)

    //Act
    // ...Nothing

    // Assert
    const loginElement = screen.getByText('Login');
    expect(loginElement).toBeInTheDocument()

});