// src/pages/Home.js
import React, { useState } from 'react';
import BookList from '../components/BookList';
import BookDetails from '../components/BookDetails';

function Home() {
    const [selectedBookId, setSelectedBookId] = useState(null);

    return (
        <div>
            <BookList onView={setSelectedBookId} onEdit={setSelectedBookId} />
            {selectedBookId && <BookDetails bookId={selectedBookId} />}
        </div>
    );
}

export default Home;
