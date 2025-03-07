'use client'
import {Header} from "../components/Header"
import Landing from "../components/Landing"
import {CardWrapper, Card} from "../components/Card"
import { LuPersonStanding } from "react-icons/lu";
import { BiBible } from "react-icons/bi";
import { FiYoutube } from "react-icons/fi";
import { TbLocationPin } from "react-icons/tb";
import Countdown from "../components/Countdown"
import Footer from "../components/Footer"
import HomeSection from "../components/HomeSection"
import Family from "../../public/family.jpg"
import YoutubeLive from "../components/YoutubeLive"

export default function Page() {
  
  return (
    <>
      <Header/>
      <Landing 
        title="25 Years Making a Difference" 
        subtitle="with the Gospel"
        desc="For 25 years we have laboured as a church to shine as lights in our community so that everyone has the opportunity to hear and experience the good news of Jesus Christ."/>
        <YoutubeLive type="live"/>
        <div>{<Countdown/>}</div>
      <CardWrapper center={true}>
        <Card 
        title="New Here?" 
        img={<LuPersonStanding className="icon-small"/>}
        desc="A warm welcome to Enterprise Bible Baptist Church. Let us help you get started quickly with our helpful resources" bname="Get started" blink="/new" visible={true}/>
        <Card 
        title="What is the Gospel?" 
        img={<BiBible className="icon-small"/>}
        desc="Learn more about the gospel and what it means to be saved" blink="/beliefs/gospel" bname="Learn more" visible={true}/>
        <Card 
        title="Pay us a Visit" 
        img={<TbLocationPin className="icon-small"/>}
        desc="We are located at the corner of Dass and Nimblette Street, Enterprise, Chaguanas" blink="https://www.google.ca/maps/dir//Enterprise+Bible+Baptist+Church,+10%C2%B032'00.+61%C2%B023'11.5%22W+9th+Street+Chaguanas,+Trinidad+and+Tobago/@10.5335993,-61.3891103,17z/data=!4m17!1m7!3m6!1s0x8c35f93d3e43ebb9:0x39b332b84bd77b91!2sEnterprise+Bible+Baptist+Church!8m2!3d10.533594!4d-61.38653!16s%2Fg%2F11c5s9d092!4m8!1m0!1m5!1m1!1s0x8c35f93d3e43ebb9:0x39b332b84bd77b91!2m2!1d-61.3865458!2d10.5336485!3e3?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" bname="Get directions" visible={true}/>
        <Card 
        title="Watch our Services Online" 
        img={<FiYoutube className="icon-small"/>}
        desc="Start watching our services which are streamed live every Sunday and Tuesday" 
        blink="/live" 
        bname="Watch now" visible={true}/>
      </CardWrapper>
      <div className="hs">
      <HomeSection 
      title="We are a Family" 
      desc="At Enterprise Bible Baptist Church, all are welcome. No matter who you are or where you're from, we want to treat like family with the love of Christ." 
      img="family"/>
      <HomeSection 
      title="Get Involved" 
      desc="No matter who you are, God wants to use you to build His kingdom and further the work of the gospel. See how you can get involved in the great work that God has called us to." 
      img="involved"/>
      </div>
      <Footer/>
    </>
  );
}
