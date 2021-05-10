import React from 'react';
import './blog-post-list.scss';

export default function BlogPostTitle(props) {
    const {blogPost} = props;

    return (
        <div className="blog-post-list">
            <img src={blogPost.image} alt={blogPost.title} className={blogPost.imageOrientation}/>
            <h1>{blogPost.title}</h1>
            <h4>{blogPost.author}</h4>
            <p>{blogPost.content}</p>
        </div>
    );
}