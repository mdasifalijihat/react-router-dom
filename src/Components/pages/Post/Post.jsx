import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id, title} =post;
    return (
        <div>
            <div className='border p-4 text-red-500 rounded-2xl space-y-4'>
                <h2>{id} </h2>
                <p>{title}</p>
                <Link className='border p-2 rounded-2xl text-black' to={`/posts/${id}`}> show details </Link>
            </div>
        </div>
    );
};

export default Post;