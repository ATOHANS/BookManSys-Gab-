// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookDetails from './components/BookDetails';
import './App.css'; // Import your styles here

const App = () => {
    return (
        <Router>
            <div className="App">
                <h1>Book Management System</h1>
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/add" element={<BookForm />} />
                    <Route path="/edit/:id" element={<BookForm />} />
                    <Route path="/view/:id" element={<BookDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
