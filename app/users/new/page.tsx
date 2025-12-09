'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const NewUsersPage = () => {
    const router = useRouter();
    return (
        <button className='btn btn-primary' onClick={() => router.push('/users')}>Create New User</button> //here use programatic navigation to go back to users page 
    )
}

export default NewUsersPage 