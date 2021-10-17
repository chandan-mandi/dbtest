import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Shop from './pages/Shop/Shop';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { createContext, useEffect, useState } from 'react';
import Footer from './pages/shared/Footer/Footer';
import Eror from './pages/Eror/Eror';
import SingleFood from './pages/Shop/SingleFood/SingleFood';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Payment from './pages/Payment/Payment';
import AuthProvider from './AuthProvider/AuthProvider';

export const mealContext = createContext('meal')




function App() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch('./fullmenudb.json')
      .then(res => res.json())
      .then(data => setMeals(data))
  }, [])
  console.log(meals);
  return (
    <div className="">
      <mealContext.Provider value={meals}>
        <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/singlefood/:mealId">
              <SingleFood></SingleFood>
            </Route>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <Route path="*">
              <Eror></Eror>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
        </AuthProvider>
      </mealContext.Provider>
    </div>
  );
}

export default App;
