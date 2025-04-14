import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    const {website, name} = user;
    return (
        <div className='text-center font-bold gap-6 p-6'>
            <p> user details </p>
            <p className='text-red-600'> website: {website }</p>
            <h2> Name: {name}</h2>
        </div>
    );
};

export default UserDetails;