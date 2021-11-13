import { Box } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://guarded-temple-07884.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                        All Products
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map(product => <ManageProduct
                                key={product.name}
                                product={product}
                            ></ManageProduct>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default ManageProducts;