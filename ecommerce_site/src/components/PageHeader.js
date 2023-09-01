import React from 'react';
import PageLink from './PageLink';

function PageHeader() {
    return (
        <header className='bg-slate-700 flex justify-between p-6'>
            <PageLink to='/'>
                Welcome to Vibes Trends
            </PageLink>

            <nav className='flex gap-10'>
                <PageLink to='/products'>Products</PageLink>
                <PageLink to='login'>Login</PageLink>
                <PageLink to='signup'>SignUp</PageLink>
            </nav>
        </header>
    )
}

export default PageHeader