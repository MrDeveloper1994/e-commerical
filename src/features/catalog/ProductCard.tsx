import {
    Avatar,
    Card,
    CardMedia,
    Typography,
    CardContent,
    CardActions, Button, CardHeader
} from "@mui/material";
import React from "react";
import Product from "../../app/models/product";

const ProductCard: React.FC<{ product: Product }> = ({product}) => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}
                }}
            />
            <CardMedia
                component="img"
                sx={{height: 140, bgcolor: 'primary.light', backgroundSize: 'contain'}}
                src={product.pictureUrl}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    {(product.price / 100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}
export default ProductCard;