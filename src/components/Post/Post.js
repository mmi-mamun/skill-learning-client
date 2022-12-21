import React from 'react';
import './Post.css'

const Post = ({ post }) => {
    const { firstPart, secondPart, title, author, imgUrl } = post;
    return (
        <div>
            <div className="blog-text">
                <h1 className='lg:text-2xl text-orange-400 font-semibold'>{title}</h1>
                <p><small>Author: {author}</small></p>
                <img src={imgUrl} alt="" srcset="" />
                <p className='txt'>{firstPart}</p>
                <p className='txt'>{secondPart}</p>
            </div>

        </div>
    );
};

export default Post;