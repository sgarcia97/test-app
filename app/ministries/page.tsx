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
                desc="As men, we are called upon to be leaders in our homes, communities, and the church. This ministry seeks to empower men to live up to the potential God wants men to be." 
                visible={false}
                />
                <Card 
                img={<BsPersonStandingDress className="icon-small" />}
                title="Women's Ministry" 
                desc="The Proverbs 31 woman is the image women should be in their homes, workplaces, church and to their family." 
                visible={false}
                />
                <Card 
                img={<FaPeopleRoof className="icon-small"/>}
                title="Visitation Ministry" 
                desc="We are called upon to be the salt and light of the esrth and to carry the gospel to every creature. Join us on Saturdays as we spread the good news of Jesus Christ in our communities." 
                visible={false}
                />
                <Card 
                img={<TiMediaFastForwardOutline className="icon-small" />}
                title="Media Ministry" 
                desc="This ministry seeks to glorify God through the use of technology in propagating the gospel through the global media." 
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