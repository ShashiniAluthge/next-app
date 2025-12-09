

interface Props {
    params: { slug: string[] };
    searchParams: { sortOrder: string }
}

const ProductPage = async ({ params, searchParams }: Props) => {
    const { slug } = await params,
        { sortOrder } = await searchParams;

    return (
        <div>
            <h1>Product Page {slug} {sortOrder}</h1>

        </div>
    )
}

export default ProductPage