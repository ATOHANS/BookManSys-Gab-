// src/components/BookDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const BookDetails = () => {
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/Book/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch book details');
                }
                const data = await response.json();
                setBook(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchBook();
    }, [id]);

    if (error) {
        return <p className="text-danger">{error}</p>;
    }

    if (!book) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Published Year:</strong> {book.published_year}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <Button as={Link} to={`/edit/${book.id}`} variant="warning">Edit</Button>
            <Button as={Link} to="/" variant="secondary" className="ms-2">Back to List</Button>
        </div>
    );
};

export default BookDetails;
