import React from 'react';

export default function SearchControls({
    subject,
}) {
    return (
        <form>
            <label htmlFor='subject'>Subject</label>
            <input
            id='subject'
            name='subject'
            type='text'
            value={subject}
            />
            <button aria-label='fetch-params'>Full Send</button>
        </form>
    )
}