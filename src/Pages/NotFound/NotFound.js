import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="m-5">
                <img src="https://media.istockphoto.com/photos/placard-with-page-not-found-error-message-picture-id830503696?b=1&k=20&m=830503696&s=170667a&w=0&h=fPTfkG5oP9ZqLJw3TrQWEUcVlgl3UDnvx0Qj3a00gCc=" alt="" />
                <br />
                <Link to="home"><button className="btn btn-danger mt-5 p-2">Go To Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;