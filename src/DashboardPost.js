import React, { useState } from 'react';
import { render } from "react-dom";
import './App.css'
import BlogList from './staffbloglist';
import useFetch from "./useFetch";

function DashboardPost(){
    const {data: blogs, pending, error} = useFetch('http://localhost:8000/blogs')
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');
    const[isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => { 
        e.preventDefault();
        const blog = {title , body, author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log('new blog added');
            setIsPending(false)
        })
    }
    const handleClick = (id) => {        
        
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {window.location.reload(false);})

    }
    
    return(
        <div className="App">
            <h2 className="InnerText">Add a new post to Dashboard</h2>
            <form className="DashboardPost" onSubmit={handleSubmit}>
                <label >Message title: </label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>content:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label>Author:</label>
                <input 
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Post</button>}
                { isPending && <button disabled>Adding blog...</button>}

            </form>
            <div>
                {error && <div>{ error }</div>}
                {pending && <div>Loading...</div>}
                {blogs && <BlogList blogs={blogs} title="Message Postbox" handledelete={handleClick} />}
            </div>
            
        </div>
    )


}
export default DashboardPost;