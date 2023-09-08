import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import ProductList from './components/ProductList'
import AuthanticationView from './components/AuthanticationView'

export default function AppRouter({ children, }) {
    return <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' render={(routerprops) => <AuthanticationView {...routerprops} isLogin />} />
        <Route path='/signup' render={(routerprops) => <AuthanticationView {...routerprops}  />} />
        <Route exact path='/products' component={ProductList} />
        <Route path='/products/:id' component={ProductDetails} />
    </Switch>
}