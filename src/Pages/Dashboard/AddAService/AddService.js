import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
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

    };
    return (
        <div>
            <h1 className="text-danger">Add A New Package</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mt-5" placeholder="title" {...register("title")} /><br />
                <input className="mt-1" placeholder="price" {...register("price")} /><br />
                <input className="mt-1" placeholder="img url"  {...register("img")} /><br />
                <input className="mt-1" placeholder="time"  {...register("time")} /><br />
                <input className="mt-1 btn btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default AddService;