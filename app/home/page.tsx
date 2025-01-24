import Image from "next/image";
import {Header} from "../components/Header"
import Landing from "../components/Landing"
import {CardWrapper, Card} from "../components/Card"

export default function Page() {
  return (
    <>
      <Header/>
      <Landing title="Making a Difference" subtitle="with the Gospel"/>
      <CardWrapper center={true}>
        <Card title="New Here?" desc="Let us help you get started quickly with our helpful resources" bname="Get Started" blink="/new" visible={true}/>
        <Card title="What is the Gospel?" desc="Learn more about the gospel and what it means to be saved" blink="/beliefs/gospel" bname="Learn more" visible={true}/>
        <Card title="Pay us a Visit" desc="We are located at the corner of Dass and Nimblette Street, Enterprise, Chaguanas" blink="/contact" bname="Get Directions" visible={true}/>
        <Card title="Watch our Services Online" desc="Start watching our services which are streamed live every Sunday and Tuesday" blink="/live" bname="Watch now" visible={true}/>
      </CardWrapper>
    </>
  );
}
