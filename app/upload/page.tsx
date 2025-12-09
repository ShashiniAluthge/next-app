'use client'
import { CldImage, CldUploadWidget } from 'next-cloudinary'
import { useState } from 'react'

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('')

    return (
        <>
            {publicId && <CldImage src={publicId} alt='A new image' width={270} height={180} />}
            <CldUploadWidget
                uploadPreset='testabcd'
                options={{
                    sources: ['local']
                }}
                onSuccess={(result, widget) => {
                    if (result.event !== 'success') return;
                    const info = result.info as CloudinaryResult;
                    setPublicId(info.public_id);
                }}>
                {({ open }) => <button className='btn btn-primary' onClick={() => open()}>Upload</button>}
            </CldUploadWidget></>
    )
}

export default UploadPage