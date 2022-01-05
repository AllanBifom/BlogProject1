import { NavLink, } from "react-router-dom";
import React, { useState } from 'react';
import styled from 'styled-components';


const BlogList = ({meetings, topic, handledelete}) => {
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
            <h2>{topic}</h2>
            {meetings.map((meeting)=>(<div className="blog-preview" key={meeting.id}>
                <h2>{meeting.topic}</h2>
                <p>hosted by {meeting.host}</p>
                <a href={meeting.link} style={{color:"red"}}>LINK: {meeting.link}</a><br/><br/>
                <Button onClick={() => { handledelete(meeting.id)}}>
                    delete
                    </Button>
            </div>))}
        </div>
    )
}
export default BlogList