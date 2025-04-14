import React from 'react';
import { useLoaderData } from 'react-router';
import UserCard from './UserCard';

const User = () => {

    const users = useLoaderData()
    
    return (
        <div>
            <h2> This is a use page </h2>
            <div className='grid grid-cols-3 gap-6'>
                {
                    users.map((user) => <UserCard key={user.id} user={user}></UserCard>)
                }
            </div>
        </div>
    );
};

export default User;