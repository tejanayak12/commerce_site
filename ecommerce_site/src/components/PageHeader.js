import React from 'react';
import PageLink from './PageLink';
import { useUser } from '../ProductContext/UserProvider';

function PageHeader() {
    const { user } = useUser();
    return (
        <header className='bg-slate-700 flex justify-between p-6'>
            <PageLink to='/'>
                Welcome to Trend Vibes
            </PageLink>

            <nav className='flex gap-10'>
                <PageLink to='/products'>Products</PageLink>
                {user ? <div className='text-slate-200 hover:text-cyan-400 border-solid border-2 border-slate-400 px-6 rounded-full hover:bg-gray-900 hover:text-white'>{user.email}  <PageLink to='logout'>Log-Out</PageLink> </div> : <>
                    <PageLink to='login'>Login</PageLink>
                    <PageLink to='signup'>SignUp</PageLink>
                </>}
            </nav>
        </header>
    )
}

export default PageHeader