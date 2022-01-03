import {ListItem, ListItemAvatar, Avatar, ListItemText, List, Grid} from "@mui/material";
import React from "react";
import Product from "../../app/models/product";
import ProductCard from "./ProductCard";

const ProductList: React.FC<{ products: Product[] }> = ({products}) => {
    return (
        <Grid container spacing={4}>
            {products.map((product) => (
                <Grid item  xs={3} key={product.id}>
                    <ProductCard product={product}/>
                </Grid>
            ))}
        </Grid>
    )

}
export default ProductList;