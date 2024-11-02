// src/pages/AddBook.js
import React from 'react';
import BookForm from '../components/BookForm';

function AddBook() {
    const handleSave = () => {
        alert('Book added successfully!');
    };

    return (
        <div>
            <h1>Add Book</h1>
            <BookForm onSave={handleSave} />
        </div>
    );
}

export default AddBook;
