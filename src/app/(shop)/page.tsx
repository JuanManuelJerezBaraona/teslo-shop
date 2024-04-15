import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";



export default async function Home() {

    const { products } = await getPaginatedProductsWithImages();

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
