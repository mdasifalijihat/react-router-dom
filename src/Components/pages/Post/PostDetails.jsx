import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {

    const post = useLoaderData();
    return (
        <div className='border p-6 rounded-2xl text-red-500 space-y-2'>
           <p> post details </p> 
           <p className='text-2xl font-bold'> Title: {post.title}</p>
           <p> Body: {post.body}</p>
        </div>
    );
};

export default PostDetails;