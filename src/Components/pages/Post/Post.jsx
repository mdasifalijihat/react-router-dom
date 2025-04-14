import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id, title} =post;

     const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <div>
            <div className='border p-4 text-red-500 rounded-2xl space-y-4'>
                <h2>{id} </h2>
                <p>{title}</p>
                <Link className='border p-2 rounded-2xl text-black' to={`/posts/${id}`}> show details </Link>

                <button onClick={handleNavigate} className='btn'> Details of: {id}</button>
            </div>
        </div>
    );
};

export default Post;