import React, { useState, useEffect } from 'react';
import api from './api';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        api.getHello()
            .then(res => setMessage(res.message))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <p>test</p>
            <h1>{message}</h1>
        </div>
    );
}

export default App;
