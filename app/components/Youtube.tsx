"use client"
import {useState, useEffect} from "react"
import { TfiClose } from "react-icons/tfi";

export const Youtube = (props) => {
  const browse = (address:string) => {location.assign(address)}
  const [visible, setVisible] = useState(false);
    return ( 
      <>
            <div className="video" onClick={()=>setVisible(true)}>
              <img className="video-image" src={props.data.img} alt="" ></img>
              <div className="video-content">
              <div className="video-title">{props.data.title}</div>
              <div className="video-date">{props.data.date}</div>
              </div>
            </div>
            {visible && <VideoModal data={props.data} vis={setVisible}/>}
            </>
    )
      
}

export const YoutubeEmbed = (props) => {
  const browse = (address:string) => {location.assign(address)}
  
    return (
      <div className="live-video">
             <iframe className="iframe"
      
      width="100%"
      height="auto"
      src={`https://www.youtube.com/embed/${props.data.vid}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
              <div className="video-content">
              <div className="video-title">{props.data.title}</div>
              </div>
            </div>
    )
};

export const VideoModal = (props) => {
  
  return(
    <div className="video-modal">
      <iframe className="iframe" width="auto" height="100%" src={`https://www.youtube.com/embed/${props.data.vid}?si=rwSuSk6NzK1rySop`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <div className="video-title">{props.data.title}</div>
<div className="center">{props.data.desc}</div>
    <div className="close" onClick={()=>props.vis(false)}><TfiClose className="close-icon"/></div>
    </div>
    )

  
}