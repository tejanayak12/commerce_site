import React from 'react';
import PageLink from './PageLink';
import { useUser } from '../ProductContext/UserProvider';
import { useAppContext } from '../ProductContext/AppProvider';

function PageHeader() {
    const { user } = useUser();
    const { cartCount } = useAppContext();
    return (
        <header className='bg-slate-700 flex justify-between p-5'>
            <PageLink to='/'>
                Welcome to Trend Vibes
            </PageLink>

            <nav className='flex gap-10'>
                <PageLink to='/products'>Products</PageLink>
                {user ? <div className='text-slate-200 hover:text-cyan-400 border-solid border-2 border-slate-400 px-6 rounded-full hover:bg-gray-900 hover:text-white'>{user.email}  <PageLink to='logout'>Log-Out</PageLink> </div> : <>
                    <PageLink to='login'>Login</PageLink>
                    <PageLink to='signup'>SignUp</PageLink>
                </>}
                <PageLink to='/cart'>Cart-Items : {cartCount}</PageLink>
            </nav>
        </header>
    )
}

export default PageHeader