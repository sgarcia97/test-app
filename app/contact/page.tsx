import React from "react"
import Template from "../components/Template"
import {Card, CardWrapper} from "../components/Card"
import { FaWhatsapp } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";

const Page = () => {
    return(
      
        <Template title="Contact">
        <CardWrapper center={true}>
                <Card 
                title="Call Us" 
                desc="(868) 689-0908"
                img={<IoCallOutline className="icon"/>}
                visible={false}
                />
                <Card 
                title="WhatsApp" 
                desc="(868) 689-0908" 
                img={<FaWhatsapp className="icon"/>}
                visible={false}
                />
                <Card 
                title="Visit Us" 
                desc="Corner of Dass Trace & Nibblette Street, Enterprise, Chaguanas" 
                img={<GrLocation className="icon"/>}
                visible={true}
                bname="Get directions"
                blink="/"
                />
                <Card 
                title="Follow Us" 
                img={<IoShareSocial className="icon"/>}
                desc="Start watching our services which are streamed live every Sunday and Tuesday" 
                visible={false}
                />
              </CardWrapper>
              </Template>

    )
}

export default Page;