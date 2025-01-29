import Template from "../components/Template"
import Countdown from "../components/Countdown"
import Youtube from "../components/Youtube"
import YoutubePlaylist from "../components/YoutubePlaylist"

const Page = () => {
  return(
   <Template title="Live">
    <YoutubePlaylist/>
    <Countdown/>
    </Template>
  );
}

export default Page;
