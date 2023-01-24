import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const handleRoute = () =>{
        navigate('/products');
    };
    return (
        <button onClick={handleRoute}>
            Go to products
        </button>
    );
}

export default HomePage;
