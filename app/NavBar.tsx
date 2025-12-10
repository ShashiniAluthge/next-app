'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'


const NavBar = () => {

    const { status, data: session } = useSession();

    return (
        <div className='flex bg-slate-200 p-5 '>
            <Link href='/' className='mr-5'>Home</Link>
            <Link href='/users' className='mr-5'>Users</Link>
            <Link href='/admin' className='mr-5'>Admin</Link>
            {status === 'loading' && <div className='ml-auto'>Loading...</div>}
            {status === 'authenticated' &&
                <div>{session.user?.name}
                    <Link href='/api/auth/signout' className='ml-5'>Sign Out</Link>
                </div>}
            {status === 'unauthenticated' && <Link href='/api/auth/signin' className='ml-auto'>Sign In</Link>}
        </div>
    )
}

export default NavBar