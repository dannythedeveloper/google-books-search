import React from 'react';
import ReactDOM from 'react-dom';
import ResultsList from './ResultsList';

describe('Results List Component', () => {
    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ResultsList /> , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})