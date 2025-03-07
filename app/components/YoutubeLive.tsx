"use client"
import {useState, useEffect} from "react"
import {Youtube, YoutubeEmbed} from "../components/Youtube"
const YoutubeLive = (props) => {
    const [data, setData] = useState(null)
    useEffect(()=>{
      const getYoutubeData = async () => {
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxKPidrU1v0sMAGoIs9HVRA&eventType=${props.type}&maxResults=10&q=enterprisebiblebaptistchurch&type=video&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`;
        const request = await fetch(url);
        if(request.ok){
          const ydata = await request.json();
          setData(ydata)
          console.log(ydata)
        }
        
      }
      getYoutubeData()
      
    },[])
    if (!data) return <div className="message">Livestream is not available right now</div>
    return (
      <>
      
      {data.items.length == 0 && props.type == "live" && <div className="message">Live stream not available right now</div>}
        <div className="live-wrapper">
        {data.items.length > 0 && <div className="live-title">{props.type}</div>}
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

              if(props.type == "upcoming"){        
                return <Youtube key={p.etag} data={d}/>
              }else{
                return <YoutubeEmbed key={p.etag} data={d}/>
              }
        
})
          }

</div>
</>
)
}

export default YoutubeLive;