import React from 'react';

const Post = ({match}) => {
    return (
        <div>
           Posts {match.params.id}
        </div>
    );
};

export default Post;