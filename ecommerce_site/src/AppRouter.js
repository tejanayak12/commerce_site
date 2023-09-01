import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import ProductList from './components/ProductList'
import Login from './components/Login'
import SignUp from './components/SignUp'

export default function AppRouter({ children, }) {
    return <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={SignUp}></Route>
        <Route exact path='/products' component={ProductList} />
        <Route path='/products/:id' component={ProductDetails} />
    </Switch>
}
