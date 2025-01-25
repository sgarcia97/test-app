import React from "react"
import {Header} from "../components/Header"
import {Card, CardWrapper} from "../components/Card"
import PageLayout from "../components/PageLayout"
import {Title} from "../components/Title"
import Whatsapp from "../../public/whatsapp.svg"

const Page = () => {
    return(
        <>
        <Header/>
        <Title title="Contact"/>
        <PageLayout>
        <CardWrapper center={true}>
                <Card 
                title="Call Us" 
                desc="(868) 689-0908"
                img={Whatsapp}
                visible={false}
                />
                <Card 
                title="WhatsApp" 
                desc="(868) 689-0908" 
                img={Whatsapp}
                visible={false}
                />
                <Card 
                title="Visit Us" 
                desc="Corner of Dass & Niblette street, Enterprise" 
                visible={false}
                />
                <Card 
                title="Follow Us" 
                desc="Start watching our services which are streamed live every Sunday and Tuesday" 
                visible={false}
                />
              </CardWrapper>
              </PageLayout>
        </>
    )
}

export default Page;