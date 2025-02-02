"use client"
import {useState, useEffect} from "react"
import {VideoModal,Youtube} from "../components/Youtube"
import staticData from "../components/dataa.json"
const YoutubePlaylist = () => {
    const [data, setData] = useState(null)
    const [modal, setModal] = useState(false)
    const [vid, setVid] = useState(null)
  console.log(vid)
    const handleModal = (vidd:string) => {
      setModal(true)
      setVid(vidd)
    }
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
    if (!data) return (
    <div className="message">Getting Videos...</div>
 
  )
    return (
      <>
      {modal && <VideoModal vid={vid}/>}
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
                return <Youtube key={p.etag} data={d} onClick={()=>handleModal(p.id.videoId)}/>
              }
        
})

}
</div>
</>
)

}

export default YoutubePlaylist;