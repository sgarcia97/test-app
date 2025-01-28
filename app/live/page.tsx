'use client'
import Image from "next/image";
import Template from "../components/Template"
import Countdown from "../components/Countdown"
import {useEffect, useState} from "react"

export default  function Page() {
  const [data, setData] = useState([])

  useEffect(()=>{
const req = "GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=200&q=enterprisebiblebaptistchurch&key=AIzaSyDNVKo6Z6nyzK8bshHKWwUf7Ug80pP2nn4 HTTP/1.1"

//Authorization: Bearer [YOUR_ACCESS_TOKEN]
//Accept: application/json
    const getyou = async () => {
      const response = await fetch(req);
      const data = await response.json();
      setData(data)
    }
 
  console.log(data)
  },[])
  return (
    
   <Template title="Live">
    <p>{ }</p>
    <Countdown/>
    </Template>
  );
}
