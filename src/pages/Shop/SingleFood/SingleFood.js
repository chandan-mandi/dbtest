import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useMeal from '../../../hooks/useMeal';


const SingleFood = () => {
    const { mealId } = useParams();
    console.log(mealId);
    
    return (
        <div>
            <h2>Single Food Item Details</h2>
            <h2>Food Id: {mealId}</h2>


            <div className="mx-auto ">
                <h2><Link to="/payment">payment</Link></h2>
            </div>
        </div>
    );
};

export default SingleFood;