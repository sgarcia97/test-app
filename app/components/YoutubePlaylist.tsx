"use client"
import {useState, useEffect} from "react"
import Youtube from "../components/Youtube"
const YoutubePlaylist = () => {
    const [data, setData] = useState(null)
    useEffect(()=>{
      const getYoutubeData = async () => {
        const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&maxResults=25&channelId=UCxKPidrU1v0sMAGoIs9HVRA&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`;
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
          data.items.map((pl) => {
            
             return <div key={pl.etag}><Youtube cid={pl.id}/></div>

           
})
}
</div>
)
}

export default YoutubePlaylist;