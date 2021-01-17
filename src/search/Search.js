import React from 'react';
import './Search.css';

export default function Search(props) {
    return (
        <div className="search">
            <form onSubmit={props.getBookInfo} className="search-form">
                <label htmlFor="search">Search: </label>
                <input
                    onChange={props.handleSearch} 
                    className="search" 
                    type="text" />
                <button type="submit">Search</button>
                <div className="results-filter">
                <label htmlFor="print-filter" className="print-type">Print Type: </label>
                <select className="print-filter"  onChange={props.handlePrintType} >
                    <option value="">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="book-filter" className="book-type">Book Type: </label>
                <select className="book-filter"  onChange={props.handleFilter} >
                    <option value="">No Filter</option>
                    <option value="free-ebooks">Free eBooks</option>
                    <option value="paid-ebooks">Paid eBooks</option>
                </select>
                </div>
            </form>
        </div>
    )
}
