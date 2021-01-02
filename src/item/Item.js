import React from 'react';
import './Item.css'

export default function Item(props) {
    return (
        <div className="item">
            <h2>{props.title}</h2>
            <div className="book">
                <img src={props.image} alt="Book cover" />
                <div className="book-information">
                    <div>
                        <p>Author: {props.author}</p>
                        <p>Price:  {props.price} </p>
                    </div>
                    <div className="book-description">
                        <p dangerouslySetInnerHTML={{__html: props.snippet} }/>
                    </div>
                </div>
            </div>
        </div>
    );
}
