"use client"
import {useState, useEffect} from "react"

export const Youtube = (props) => {
    const browse = (address:string) => {location.assign(address)}
    return (
            <div className="video" onClick={()=>browse(`https://www.youtube.com/watch?v=${props.data.vid}`)} key={props.data.etag}>
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
            <iframe src={`https://www.youtube.com/watch?v=${props.data.vid}`} key={props.data.etag}/>
              
              <div className="video-content">
              <div className="video-title">{props.data.title}</div>
              </div>
            </div>
    )
};