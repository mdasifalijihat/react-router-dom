import React, { use } from 'react';

const User2 = ({userPromise}) => {
    const users = use(userPromise);
    console.log('user2', users)
    
    return (
        <div>
            <h2> User 2 </h2>
        </div>
    );
};

export default User2;