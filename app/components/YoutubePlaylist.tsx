"use client"
import {useState, useEffect} from "react"
import {Youtube} from "../components/Youtube"
import staticData from "../components/dataa.json"
const YoutubePlaylist = () => {
    const [data, setData] = useState(null)
    const [modal, setModal] = useState(false)
    const [vid, setVid] = useState(null)
    const handleModal = (vidd:string) => {
      setModal(true)
      setVid(vidd)
      console.log("access")
    }
    
    useEffect(()=>{
      const getYoutubeData = async () => {
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxKPidrU1v0sMAGoIs9HVRA&maxResults=100&order=date&q=enterprisebiblebaptistchurch&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`;
        const request = await fetch(url);
        if(request.ok){
          const ydata = await request.json();
          setData(ydata)
        }
      }
      getYoutubeData()
    },[])
    
    //useEffect(()=>{
      //setData(staticData)
   // },[])
   
    if (!data) return <div className="message">Getting Videos...</div>
  
    return (
      <>

        <div className="video-wrapper"> 
        {
          data.items.map((p:any) => {
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
                return <Youtube key={p.etag} data={d} />
              }
        
})

}
</div>
</>
)

}

export default YoutubePlaylist;