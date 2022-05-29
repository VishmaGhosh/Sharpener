import { render, screen } from '@testing-library/react';
import Signup from './Signup'

test('renders signup as a text', () => {
    //Arrange
    render(<Signup />)

    //Act
    // ...Nothing

    // Assert
    const signupElement = screen.getByText('Sign up');
    expect(signupElement).toBeInTheDocument()

});