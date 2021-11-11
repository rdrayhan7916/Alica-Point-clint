import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth'

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/addreview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        alert('Added Successfuly')

    };
    const { user } = useAuth()
    return (
        <div>
            <h1 className="text-danger">Add A New Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mt-5" defaultValue={user.displayName} {...register("name")} /><br />
                <input className="mt-1" placeholder="Description" {...register("description")} /><br />
                <input className="mt-1 btn btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;