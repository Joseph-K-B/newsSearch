import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import NewsSearch from './NewsSearch';

describe('Displays list of new articles', () => {
    it('should display 20 top news articles', async () => {
        render(<NewsSearch />);
        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'articles' });
        expect(ul).toMatchSnapshot();

        const subjectInput = await screen.findAllByLabelText('Subject');
        userEvent.type(subjectInput, 'China');

        const submitButton = await screen.findByRole('button', {
            name: 'fetch-params'
        });

        userEvent.click(submitButton);

        return waitFor(() => {
            const articles = screen.getAllByText('China', {
                exact: false
            });

            expect(articles).toHaveLength(20);
        });
    });
});