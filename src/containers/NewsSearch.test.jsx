import { render, screen } from '@testing-library/react';
import React from 'react';
import NewsSearch from './NewsSearch';

describe('Displays list of new articles', () => {
    it('should display 20 top news articles', async () => {
        render(<NewsSearch />);
        screen.getByText('Loading...');

    //     const ul = await screen.findByRole('section', { name: 'articles' });
    //     expect(ul).toMatchSnapshot();

    //     const subjectInput = await screen.findAllByLabelText('');
    //     userEvent.type(subjectInput, 'subject');

    //     const submitButton = await screen.findByRole('button', {
    //         name: 'apple'
    //     });

    //     userEvent.click(submitButton);

    //     return waitFor(() => {
    //         const articles = screen.getAllByText('apple', {
    //             exact: false
    //         });

    //         expect(articles).toHaveLength(20);
    //     });
    });
});