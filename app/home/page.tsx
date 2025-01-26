import Image from "next/image";
import {Header} from "../components/Header"
import Landing from "../components/Landing"
import {CardWrapper, Card} from "../components/Card"
import { LuPersonStanding } from "react-icons/lu";
import { BiBible } from "react-icons/bi";
import { FiYoutube } from "react-icons/fi";
import { TbLocationPin } from "react-icons/tb";

export default function Page() {
  return (
    <>
      <Header/>
      <Landing 
        title="25 Years Making a Difference" 
        subtitle="with the Gospel"
        desc="For 25 years we have laboured as a church to shine as lights in our community so that everyone has the opportunity to hear and experience the good news of Jesus Christ."/>
      <CardWrapper center={true}>
        <Card 
        title="New Here?" 
        img={<LuPersonStanding className="icon-small"/>}
        desc="A warm welcome to Enterprise Bible Baptist Church. Let us help you get started quickly with our helpful resources" bname="Get Started" blink="/new" visible={true}/>
        <Card 
        title="What is the Gospel?" 
        img={<BiBible className="icon-small"/>}
        desc="Learn more about the gospel and what it means to be saved" blink="/beliefs/gospel" bname="Learn more" visible={true}/>
        <Card 
        title="Pay us a Visit" 
        img={<TbLocationPin className="icon-small"/>}
        desc="We are located at the corner of Dass and Nimblette Street, Enterprise, Chaguanas" blink="/contact" bname="Get Directions" visible={true}/>
        <Card 
        title="Watch our Services Online" 
        img={<FiYoutube className="icon-small"/>}
        desc="Start watching our services which are streamed live every Sunday and Tuesday" 
        blink="/live" 
        bname="Watch now" visible={true}/>
      </CardWrapper>
    </>
  );
}
