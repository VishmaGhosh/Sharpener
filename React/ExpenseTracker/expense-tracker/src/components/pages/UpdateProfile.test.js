import { render, screen } from '@testing-library/react';

import UpdateProfile from './UpdateProfile';

describe('UpdateProfile Component', () => {
    test('Render Home', () => {
        render(<UpdateProfile />)

        const h2Elememnt = screen.getByText('Contact Details')
        expect(h2Elememnt).toBeInTheDocument()
    })
})