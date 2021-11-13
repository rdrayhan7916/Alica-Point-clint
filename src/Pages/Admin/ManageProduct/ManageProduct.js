import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@restart/ui/esm/Button';
import { Alert } from '@mui/material';

const ManageProduct = ({ product }) => {
    const [confirm, setConfirm] = useState(false)
    const { name, img, price, engine, mileage, _id } = product

    const handleDelete = (id) => {
        const url = `https://guarded-temple-07884.herokuapp.com/products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setConfirm(true)
            })
    }
    return (
        <div>
            {confirm && <Alert severity="success">Delete successfully!</Alert>}
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
                        <Button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete</Button>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
};

export default ManageProduct;