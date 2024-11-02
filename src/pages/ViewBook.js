// src/pages/ViewBook.js
import React from 'react';
import BookDetails from '../components/BookDetails';
import { useParams } from 'react-router-dom';

function ViewBook() {
    const { id } = useParams();

    return (
        <div>
            <h1>View Book</h1>
            <BookDetails bookId={id} />
        </div>
    );
}

export default ViewBook;
