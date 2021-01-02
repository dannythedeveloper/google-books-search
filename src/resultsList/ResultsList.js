import React from 'react';
import Item from '../item/Item';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default class ResultsList extends React.Component {
    render() { 
        return (
            <div>
                {
                    this.props.books.map((book, index) => {
                    return (
                        <Item 
                                key = {index}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                snippet={book.searchInfo.textSnippet}
                                description={book.volumeInfo.description}
                                price={book.saleInfo.listPrice ? USCurrencyFormat.format(book.saleInfo.listPrice.amount) : "This item is not for sale"}                     
                                />
                        )
                    })
                }
            </div>
        )
    }
}
