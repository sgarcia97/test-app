import React from "react"
import Template from "../components/Template"
import {Card, CardWrapper} from "../components/Card"
import { BsPersonStanding } from "react-icons/bs";
import { BsPersonStandingDress } from "react-icons/bs";
import { FaPeopleRoof } from "react-icons/fa6";
import { TiMediaFastForwardOutline } from "react-icons/ti";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const Page = () => {
    return(
  
        <Template title="Ministry">
            <p className="page-subtitle">We have a wide variety of ministries for you get involved in. God ahs called us to serve in whatever capacity we would and there is no better place to start than allowing Jesus to take the helm of our lives. Get involved.</p>
            <CardWrapper center={true}>
                <Card 
                img={<BsPersonStanding className="icon-small"/>}
                title="Men's Ministry" 
                desc="Let us help you get started quickly with our helpful resources" 
                visible={false}
                />
                <Card 
                img={<BsPersonStandingDress className="icon-small" />}
                title="Women's Ministry" 
                desc="Learn more about the gospel and what it means to be saved" 
                visible={false}
                />
                <Card 
                img={<FaPeopleRoof className="icon-small"/>}
                title="Visitation Ministry" 
                desc="We are located at the corner of Dass and Nimblette Street, Enterprise, Chaguanas" 
                visible={false}
                />
                <Card 
                img={<TiMediaFastForwardOutline className="icon-small" />}
                title="Media Ministry" 
                desc="Start watching our services which are streamed live every Sunday and Tuesday" 
                visible={false}
                />
                <Card 
                img={<MdOutlineLocalGroceryStore className="icon-small" />}
                title="Food Hamper Ministry" 
                desc="Every month, the church selects a family from amongst its memebers or the community to gift a hamper to" 
                visible={false}
                />
              </CardWrapper>
              </Template>
    )
}

export default Page;