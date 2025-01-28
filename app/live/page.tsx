'use client'
import Image from "next/image";
import Template from "../components/Template"
import Countdown from "../components/Countdown"
import {useEffect, useState} from "react"

export default  function Page() {
  const [data, setData] = useState([])

  useEffect(()=>{

    const getyou = async () => {
      const req = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=enterprisebiblebaptistchurch&key=${process.env.YOUTUBE_API_KEY}`;
      const response = await fetch(req);
      const ydata = await response.json();
      console.log(ydata)
    }
    getyou()
  
  },[])
  console.log(data)
  return (
    
   <Template title="Live">
    <p>{ }</p>
    <Countdown/>
    </Template>
  );
}
