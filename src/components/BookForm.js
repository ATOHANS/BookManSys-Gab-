// src/components/BookForm.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const BookForm = () => {
    const [book, setBook] = useState({ title: '', author: '', published_year: '', genre: '', description: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            if (id) {
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
            }
        };

        fetchBook();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = id ? 'PUT' : 'POST';
        const url = id ? `http://127.0.0.1:8000/api/Book/${id}` : 'http://127.0.0.1:8000/api/Book';
        
        try {
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(book)
            });

            if (!response.ok) {
                throw new Error('Failed to save book');
            }
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            {error && <p className="text-danger">{error}</p>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={book.title} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" name="author" value={book.author} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="published_year">
                    <Form.Label>Published Year</Form.Label>
                    <Form.Control type="number" name="published_year" value={book.published_year} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="genre">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" name="genre" value={book.genre} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name="description" value={book.description} onChange={handleChange} />
                </Form.Group>
                <Button type="submit" className="mt-3">{id ? 'Update Book' : 'Add Book'}</Button>
            </Form>
        </div>
    );
};

export default BookForm;
