import React from 'react';
import { Switch, Route , Redirect } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import AuthanticationView from './components/AuthanticationView';
import LogOut from './components/LogOut';
import CartDetails from './components/CartDetails';
import CheckOut from './components/CheckOut';
import OrderHistory from './components/OrderHistory';
import { useUser } from './ProductContext/UserProvider';

function authRoute(ComponentView){
    return () => {
        const { user } = useUser();
        return user ?  <ComponentView /> : <Redirect to="login"/>
    }
}

export default function AppRouter({ children, }) {
    return <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' render={(routerprops) => <AuthanticationView {...routerprops} isLogin />} />
        <Route path='/signup' render={(routerprops) => <AuthanticationView {...routerprops} />} />
        <Route exact path='/products' component={ProductList} />
        <Route path='/products/:id' component={ProductDetails} />
        <Route path='/logout' component={LogOut} />
        <Route path='/cart' component={CartDetails} />
        <Route path='/checkout' component={authRoute(CheckOut)} />
        <Route path='/history' component={authRoute(OrderHistory)} />
    </Switch>
}
