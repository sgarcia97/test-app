import {useState, useEffect} from "react"

const Youtube = () => {
    const [data, setData] = useState(null)
    const browse = (address:string) => {location.assign(address)}
    useEffect(()=>{
      const getYoutubeData = async () => {
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=enterprisebiblebaptistchurch&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`;
        const request = await fetch(url);
        const ydata = await request.json();
        setData(ydata)
        console.log(ydata)
      }
      getYoutubeData()
      
    },[])
    if (!data) return <div>Getting Videos...</div>
    return (
        <div className="video-wrapper">
        {
          data.items.map((vid) => {
            
             return <div className="video" onClick={()=>browse(`https://www.youtube.com/watch?v=${vid.id.videoId}`)} key={vid.etag}>
              <img className="video-image" src={vid.snippet.thumbnails.medium.url} alt="" ></img>
              <div className="video-content">
              <div className="video-title">{vid.snippet.title}</div>
              <div className="video-desc">{vid.snippet.description}</div>
              <div className="video-dates">{vid.snippet.publishedAt}</div>
              </div>
            </div>
          })
        }
        </div>
    )
      
}

export default Youtube;