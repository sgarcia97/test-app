import Template from "../components/Template"
import Countdown from "../components/Countdown"
import YoutubePlaylist from "../components/YoutubePlaylist"
import YoutubeLive from "../components/YoutubeLive"

const Page = () => {
  return(
   <Template title="Live">
    <YoutubeLive type="live"/>
    <Countdown/>
    <YoutubeLive type="upcoming"/>
    
    
    <YoutubePlaylist/>
    
    </Template>
  );
}

export default Page;
