// src/components/BookList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/Book');
                if (!response.ok) {
                    throw new Error('Failed to load books');
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this book?');
        if (confirmDelete) {
            try {
                await fetch(`http://127.0.0.1:8000/api/Book/${id}`, { method: 'DELETE' });
                setBooks(books.filter(book => book.id !== id));
            } catch (error) {
                setError('Failed to delete book');
            }
        }
    };

    return (
        <div>
            {error && <p className="text-danger">{error}</p>}
            <Button as={Link} to="/add" className="mb-3">Add New Book</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Published Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.published_year}</td>
                            <td>
                                <Button as={Link} to={`/view/${book.id}`} variant="info">View</Button>
                                <Button as={Link} to={`/edit/${book.id}`} variant="warning" className="ms-2">Edit</Button>
                                <Button variant="danger" className="ms-2" onClick={() => handleDelete(book.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default BookList;
