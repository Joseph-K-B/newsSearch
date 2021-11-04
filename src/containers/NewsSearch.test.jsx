import { render, screen } from '@testing-library/react';
import React from 'react';
import NewsSearch from './NewsSearch';

describe('Displays list of new articles', () => {
    it('should display 20 top news articles', async () => {
        render(<NewsSearch />);
        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'articles' });
        expect(ul).toMatchSnapshot();
    })
})