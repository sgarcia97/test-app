"use client"
import {useState, useEffect} from "react"

const Youtube = (props) => {
    //const [data, setData] = useState(null)
    const browse = (address:string) => {location.assign(address)}
    //useEffect(()=>{
      //const getYoutubeData = async () => {
        //const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${cid}&maxResults=25&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`;
        //const request = await fetch(url);
        //const ydata = await request.json();
        //setData(ydata)
      //}
      //getYoutubeData()
      
    //},[])
    //if (!data) return <div>Getting Videos...</div>
    return (
        <div className="video-wrapper">
            <div className="video" onClick={()=>browse(`https://www.youtube.com/watch?v=${props.vid}`)} key={props.etag}>
              <img className="video-image" src={props.img} alt="" ></img>
              <div className="video-content">
              <div className="video-title">{props.title}</div>
              <div className="video-desc">{props.desc}</div>
              </div>
            </div>
        </div>
    )
      
}

export default Youtube;