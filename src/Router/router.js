import React from 'react'
import { Route,BrowserRouter as  Router,Switch,NavLink} from 'react-router-dom'
import BuyNow from '../Pages/BuyNow/BuyNow';
import CartComponent from '../Pages/Cart/Cart'
import HomePage from '../Pages/HomePage/HomePage';
import MenuComponent from '../Pages/Menu/Menu';

export function RouterApp(){
    return(
        <Router >
            <MenuComponent />
            <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/cart" component = {CartComponent} />
        <Route exact path = "/buyNow" component = {BuyNow} />

        </Switch>
     </Router>
    )
}