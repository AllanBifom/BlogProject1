import { NavLink, } from "react-router-dom";
import React, { useState } from 'react';
import styled from 'styled-components';


const BlogList = ({blogs, title, handledelete}) => {
    const Button = styled.button`
    background-color: #eec0b9;
    color: aliceblue;
    font-size: 15px;
    padding: 8px;
    border: 0;
    cursor: pointer;
    border-radius: 10px;
    `;
    
    
    return(

        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(<div className="blog-preview" key={blog.id}>
                
                <NavLink to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                </NavLink>
                <Button onClick={() => { handledelete(blog.id)}}>
                    delete
                    </Button>
            </div>))}
        </div>
    )
}
export default BlogList