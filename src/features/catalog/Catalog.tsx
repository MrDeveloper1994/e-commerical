import React, {useState, useEffect} from "react";
import Product from "../../app/models/product";
import ProductList from "./ProductList";

const Catalog = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('http://localhost:5208/api/Products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    
    return (
        <>
            <ProductList products={products}/>
        </>
    )
}
export default Catalog;
