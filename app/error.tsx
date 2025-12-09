'use client';

interface Props {
    error: Error;
    reset: () => void;

}

const ErrorPage = ({ error, reset }: Props) => {
    console.error('Error occurred:', error);
    return (
        <>
            <div>An unexpected error has occured.</div>
            <button className="btn" onClick={() => reset()}>Retry</button>
        </>

    )
}

export default ErrorPage