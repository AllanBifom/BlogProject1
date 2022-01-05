const MeetingList = ({meetings, topic,}) => {
    // const blogs = props.blogs;
    // const title = props.title
    
    return(

        <div className="blog-list">
            <h2>{topic}</h2>
            {meetings.map((meeting)=>(<div className="blog-preview" key={meeting.id}>
                <h2>{meeting.topic}</h2>
                <p>hosted by {meeting.host}</p>
                <a href={meeting.link} style={{color:"aliceblue"}}>link: {meeting.link}</a>
            </div>))}
        </div>
    )
}
export default MeetingList