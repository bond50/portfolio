import React from 'react';

export function Link(props) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor"
              d="M7 7h4v2H7a3 3 0 0 0-3 3a3 3 0 0 0 3 3h4v2H7a5 5 0 0 1-5-5a5 5 0 0 1 5-5m10 0a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3h-4V7zm-9 4h8v2H8zm9 1h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path>
    </svg>);
}