import { redirect } from "next/navigation";

import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";



interface Props {
    searchParams: {
        page?: string;
    }
}

export default async function Home({ searchParams }: Props) {

    const page = searchParams.page ? parseInt(searchParams.page) : 1;

    const { products } = await getPaginatedProductsWithImages({ page });

    if ( products.length === 0 ) {
        redirect('/');
    }

    return (
        <>
            <div className="px-5 sm:px-0">
                <Title 
                    title="Tienda"
                    subtitle="Todos los productos"
                    className="mb-2"
                />

                <ProductGrid 
                    products={ products } 
                />
            </div>
        </>
    );
}
