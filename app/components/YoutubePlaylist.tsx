"use client"
import {useState, useEffect} from "react"
import Youtube from "../components/Youtube"
const YoutubePlaylist = () => {
    const [data, setData] = useState(null)
    useEffect(()=>{
      const getYoutubeData = async () => {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="enterprisebiblebaptistchurch&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`;
        const request = await fetch(url);
        if(request.ok){
          const ydata = await request.json();
          setData(ydata)
        }
        
      }
      getYoutubeData()
      
    },[])
    if (!data) return <div className="message">Getting Videos...</div>
    return (
        <div className="video-wrapper">
        {
          data.items.map((p) => {
            
             return <div key={p.etag}><Youtube etag={p.etag} vid={p.id.videoId} title={p.snippet.title} img={p.snippet.thumbnails.medium.url} desc={p.snippet.description}/></div>
        
})
}
</div>
)
}

export default YoutubePlaylist;