import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';

describe('Search Component', () => {
    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Search />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})