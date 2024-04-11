import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

// Temporalmente
const products = initialData.products;

export default function Home() {
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
