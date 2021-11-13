import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://guarded-temple-07884.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <div>
            <h1 sx={{ color: "danger", margin: 2 }}>Reviews</h1>
            <Grid container spacing={2}>
                {
                    reviews.map(review => <Grid spacing={2} sx={{ border: 1, borderRadius: 16, marginTop: 4, bgcolor: 'text.secondary' }} xs={6} md={4}>

                        <p>{review.description}</p>
                        <h3>{review.name}</h3>
                    </Grid>)
                }
            </Grid>
        </div>
    );
};

export default Review;