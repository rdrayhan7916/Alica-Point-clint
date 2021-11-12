import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@restart/ui/esm/Button';
import OrderModel from '../../OrderModel/OrderModel';

const Product = ({ product, setOrderSuccess }) => {
    const { name, img, price, engine, mileage } = product

    const [openOrder, setOrderOpen] = React.useState(false);
    const handleOrderOpen = () => setOrderOpen(true);
    const handleOrderClose = () => setOrderOpen(false)

    return (
        <div>
            <Grid item xs={4} sm={4} md={6}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h6> Engine: {engine}</h6>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h6> Mileage: {mileage}</h6>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h6> Price in BDT: {price}</h6>
                        </Typography>
                        <Button onClick={handleOrderOpen} className="btn btn-danger">BYU NOW</Button>
                    </CardContent>
                </Card>
            </Grid>
            <OrderModel
                product={product}
                openOrder={openOrder}
                handleOrderClose={handleOrderClose}
                setOrderSuccess={setOrderSuccess}
            >

            </OrderModel>
        </div>
    );
};

export default Product;