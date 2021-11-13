import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch("https://guarded-temple-07884.herokuapp.com/addproduct", {
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
            <h1 className="text-danger">Add A New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mt-1" placeholder="Name" {...register("name")} /><br />
                <input className="mt-1" placeholder="Engine" {...register("engine")} /><br />
                <input className="mt-1" placeholder="Mileage"  {...register("mileage")} /><br />
                <input className="mt-1" placeholder="img-url"  {...register("img")} /><br />
                <input className="mt-1" placeholder="price" {...register("price")} /><br />
                <input className="mt-1 btn btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;