import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: number }
}

const userDetailsPage = async ({ params }: Props) => {
    const { id } = await params
    if (id > 10) notFound();
    return (
        <div>userDetailsPage {id}</div>
    )
}

export default userDetailsPage