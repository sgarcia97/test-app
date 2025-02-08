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
<p className="page-subtitle">Welcome to Enterprise Bible Baptist Church! We are delighted that you’ve taken the time to reach out to us. Whether you have questions, prayer requests, or simply want to learn more about our church community, we are here to assist you. Please reach out to us through any of the methods listed.</p>
<div>Our Service Times</div>
<div>
<h3>Sundays</h3>
<li>Sunday School (All ages) - 9:00am</li>
<li>Sunday Morning Service - 10:00am</li>  
<li>Sunday Evening Service - 6:00pm</li>    
<h3>Tuesdays</h3>
<li>Prayer and Bible Study - 7:00pm</li>
</div>
<p></p>
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
                blink="https://www.google.ca/maps/dir//Enterprise+Bible+Baptist+Church,+10%C2%B032'00.+61%C2%B023'11.5%22W+9th+Street+Chaguanas,+Trinidad+and+Tobago/@10.5335993,-61.3891103,17z/data=!4m17!1m7!3m6!1s0x8c35f93d3e43ebb9:0x39b332b84bd77b91!2sEnterprise+Bible+Baptist+Church!8m2!3d10.533594!4d-61.38653!16s%2Fg%2F11c5s9d092!4m8!1m0!1m5!1m1!1s0x8c35f93d3e43ebb9:0x39b332b84bd77b91!2m2!1d-61.3865458!2d10.5336485!3e3?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
                />
                <Card 
                title="Connect With Us" 
                img={<IoShareSocial className="icon"/>}
                desc="Stay connected with our church family by following us on social media for updates, events, and inspirational messages." 
                visible={false}
                />
              </CardWrapper>
                <p className="page-subtitle">We look forward to hearing from you and walking alongside you in your spiritual journey. May God bless you and your loved ones!</p>
              </Template>

    )
}

export default Page;