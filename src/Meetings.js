import Navbar from "./components/Navbar";
import MeetingList from "./meetinglist";
import useFetch from "./useFetch";

function Meetings(){
    const {data:meetings, pending, error} = useFetch('http://localhost:8000/meetings')
    return(
        <div> 
            <Navbar />
            <h3 style={{fontFamily: "Zapfino",color:"aliceblue", textAlign:"center"}}> Welcome to meetings</h3>

            <div >
            {error && <div>{ error }</div>}
            {pending && <div>Loading...</div>}
            {meetings && <MeetingList meetings={meetings} title="Messages from staff!" />}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === "self")} title="selfs blogs"/> */}
            </div>

        </div>
    
    )
}
export default Meetings;