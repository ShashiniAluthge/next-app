import React, { Suspense } from 'react'
import Usertable from './Usertable'
import Link from 'next/link';

interface Props {
    searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams }: Props) => {
    const { sortOrder } = await searchParams;

    return (
        <>
            <h1 >Users Page</h1>
            <Link href={'/users/new'} className='btn'>New User</Link>
            <Suspense fallback={<p>Loading ...</p>}>

                <Usertable sortOrder={sortOrder} />
            </Suspense>


        </>
    )
}

export default UsersPage