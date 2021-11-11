import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@restart/ui/esm/Button';

const Product = ({ product }) => {
    const { name, img, price, engine, mileage } = product
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
                            {engine}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {mileage}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {price}
                        </Typography>
                        <Button className="btn btn-danger">BYU NOW</Button>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
};

export default Product;