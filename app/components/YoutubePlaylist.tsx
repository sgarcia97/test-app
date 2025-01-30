"use client"
import {useState, useEffect} from "react"
import {Youtube} from "../components/Youtube"
const YoutubePlaylist = () => {
    const [data, setData] = useState(null)
    useEffect(()=>{
      const getYoutubeData = async () => {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="enterprisebiblebaptistchurch&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`;
        const request = await fetch(url);
        if(request.ok){
          const ydata = await request.json();
          setData(ydata)
          console.log(ydata)
        }
        
      }
      getYoutubeData()
      
    },[])
    if (!data) return <div className="message">Getting Videos...</div>
    return (
        <div className="video-wrapper">
        {
          data.items.map((p) => {
            const dat = new Date(p.snippet.publishedAt).toDateString()
           
            const d = { 
                        etag:p.etag,
                        vid:p.id.videoId,
                        title: p.snippet.title,
                        desc: p.snippet.description,
                        img: p.snippet.thumbnails.medium.url,
                        date: dat
                      }

              if(d.vid){        
                return <Youtube key={p.etag} data={d}/>
              }
        
})
}
</div>
)
}

export default YoutubePlaylist;