import React, { useState } from 'react';
import { render } from "react-dom";
import './App.css'
import styled from 'styled-components';
import useFetch from "./useFetch";
import MeetingList from './staffmeetinglist';

function MeetingPost(){
    const {data: meetings, pending, error} = useFetch('http://localhost:8000/meetings')
    const[topic, setTopic] = useState('');
    const[link, setLink] = useState('');
    const[host, setHost] = useState('');
    const[isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => { 
        e.preventDefault();
        const meetings = {topic , link, host};
        setIsPending(true);
        fetch('http://localhost:8000/meetings',{
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(meetings)
        }).then(() =>{
            console.log('new meeting added');
            setIsPending(false)
            window.location.reload(false);
        })
    }
    const handleClick = (id) => {        
        
        fetch('http://localhost:8000/meetings/' + id, {
            method: 'DELETE'
        }).then(() => {window.location.reload(false);})

    }
    
    return(
        <div className="App">
            <h2 className="InnerText">Add a new meeting Link to meetings</h2>
            <form className="DashboardPost" onSubmit={handleSubmit}>
                <label >Topic: </label>
                <input 
                type="text"
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                />
                <label>Link:</label>
                <input 
                required
                value={link}
                onChange={(e) => setLink(e.target.value)}>
                </input>
                <label>host:</label>
                <input 
                type="text"
                required
                value={host}
                onChange={(e) => setHost(e.target.value)}
                />
                {!isPending && <button>Add Meeting</button>}
                { isPending && <button disabled>Adding meeting...</button>}

            </form>
            <div>
                {error && <div>{ error }</div>}
                {pending && <div>Loading...</div>}
                {meetings && <MeetingList meetings={meetings} title="Message Postbox" handledelete={handleClick} />}
            </div>
            
        </div>
    )


}

export default MeetingPost;