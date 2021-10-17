import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import Lunch from './Lunch/Lunch';
import './OurMenu.css';
import OurMenuHeader from './OurMenuHeader';

const OurMenu = () => {

    return (
        <div className="our-menu-container py-5">
            <BrowserRouter>
                <OurMenuHeader></OurMenuHeader>
                <Switch>
                    <Route path="/breakfast">
                        <Breakfast></Breakfast>
                    </Route>
                    <Route path="/lunch">
                        <Lunch></Lunch>
                    </Route>
                    <Route path="/dinner">
                        <Dinner></Dinner>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default OurMenu;