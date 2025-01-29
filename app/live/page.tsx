"use client"
import Template from "../components/Template"
import Countdown from "../components/Countdown"
import Youtube from "../components/Youtube"

const Page = () => {
  return(
   <Template title="Live">
    <Youtube/>
    <Countdown/>
    </Template>
  );
}

export default Page;
