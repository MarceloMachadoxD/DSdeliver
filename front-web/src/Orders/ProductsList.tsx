import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Products } from "./types";

type Props = {
    products: Products[];
    selectedProducts: Products[];
    onSelectProduct: (product: Products) => void;


}

function ProductsList({ products, selectedProducts, onSelectProduct }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(products => (
                    <ProductCard
                    key={products.id}
                    product={products}
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectedProducts, products)}
                    />
                ))}
            </div>
        </div>

    )

}

export default ProductsList;