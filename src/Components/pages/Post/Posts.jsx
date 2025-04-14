import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h2> posts: {posts.length} </h2>
         <div className='grid grid-cols-4 text-center gap-6 p-6 '>
         {
                posts.map((post) => <Post key={post.id} post={post}> </Post>)
            }
         </div>
        </div>
    );
};

export default Posts;