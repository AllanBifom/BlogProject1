import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slick from './components/slick'
import Slick2 from './components/slick2';
import Slick3 from './components/slick3';
import BlogList from './bloglist';
import useFetch from "./useFetch";

function Dashboard(){
    const {data:blogs, pending, error} = useFetch('http://localhost:8000/blogs')
    return(
        <div>
        
            <Navbar />
            <h3 style={{fontFamily: "Zapfino",color:"aliceblue", textAlign:"center"}}> Welcome to dashBoard</h3>
            <h2 className="InnerText" style={{textAlign: 'center'}}> Testimonials</h2>
            <Slick/><br />

            <h2 className="InnerText" style={{textAlign: 'center'}}> Inspirational Quotes </h2>
            <Slick2/><br />

            <h2 className="InnerText" style={{textAlign: 'center'}}> Inspirational videos </h2>
            <Slick3/><br />
            

            <div >
            {error && <div>{ error }</div>}
            {pending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Messages from staff!" />}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === "self")} title="selfs blogs"/> */}
            </div>
            

        </div>
    )
}
export default Dashboard;