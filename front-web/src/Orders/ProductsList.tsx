import ProductCard from "./ProductCard";
import { Products } from "./types";

type Props = {
    products: Products[];

}

function ProductsList({ products }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(products => (
                    <ProductCard key={products.id} product={products} />
                ))}
            </div>
        </div>

    )

}

export default ProductsList;