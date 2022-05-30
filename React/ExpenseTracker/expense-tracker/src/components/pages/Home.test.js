import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home Component', () => {
    test('Render Home', () => {
        render(<Home />)

        const h3Elememnt = screen.getByText('Welcome to Expense tracker')
        expect(h3Elememnt).toBeInTheDocument()
    })
})