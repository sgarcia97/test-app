"use client"
import {useState, useEffect} from "react"


export const Youtube = (props) => {
  const browse = (address:string) => {location.assign(address)}
 
    return (
            <div className="video" >
              <img className="video-image" src={props.data.img} alt="" ></img>
              <div className="video-content">
              <div className="video-title">{props.data.title}</div>
              <div className="video-desc">{props.data.desc}</div>
              <div className="video-date">{props.data.date}</div>
              </div>
            </div>
    )
      
}

export const YoutubeEmbed = (props) => {
  const browse = (address:string) => {location.assign(address)}
  
    return (
      <div className="live-video">
             <iframe className="iframe"
      
      width="auto"
      height="100%"
      src={`https://www.youtube.com/embed/${props.vid}`}
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
      <iframe className="iframe"
      
      width="auto"
      height="100%"
      src={`https://www.youtube.com/embed/${props.vid}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    <button className="button" onClick={props.visible(false)}>Close</button>
    </div>
  )
}