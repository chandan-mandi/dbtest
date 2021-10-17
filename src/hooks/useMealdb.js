import React, { useEffect } from 'react';

const useMealdb = () => {
    useEffect(() => {
        fetch('./fullmenudb.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default useMealdb;