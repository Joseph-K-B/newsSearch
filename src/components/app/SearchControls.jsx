import React from 'react';

export default function SearchControls({
    subject,
    onSubjectInput,
    onSubmit
}) {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='subject'>Subject</label>
            <input
            id='subject'
            name='subject'
            type='text'
            value={subject}
            onChange={onSubjectInput}
            />
            <button aria-label='fetch-params'>Full Send</button>
        </form>
    )
}