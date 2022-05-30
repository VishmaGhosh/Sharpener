import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Header from './Header';

describe('Header Component', () => {
    test('Render Home', () => {
        render(<Header />)

        const anchorElememnt = screen.getByText('Home',)
        expect(anchorElememnt).toBeInTheDocument()
    })
})