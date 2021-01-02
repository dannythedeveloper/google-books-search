import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';

describe('Result Item Component', () => {
    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Item />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})