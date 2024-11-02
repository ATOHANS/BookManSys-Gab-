// src/pages/EditBook.js
import React from 'react';
import BookForm from '../components/BookForm';
import { useParams } from 'react-router-dom';

function EditBook() {
    const { id } = useParams();

    const handleSave = () => {
        alert('Book updated successfully!');
    };

    return (
        <div>
            <h1>Edit Book</h1>
            <BookForm bookId={id} onSave={handleSave} />
        </div>
    );
}

export default EditBook;
