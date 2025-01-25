import React from "react"
import {Header} from "../components/Header"
import {Card, CardWrapper} from "../components/Card"
import {Title} from "../components/Title"

const Page = () => {
    return(
        <>
        <Header/>
        <Title title="Contact"/>
        <CardWrapper center={true}>
                <Card 
                title="Call Us" 
                desc="(868) 689-0908"
                img="phone-call"
                visible={false}
                />
                <Card 
                title="WhatsApp" 
                desc="Learn more about the gospel and what it means to be saved" 
                img="whatsapp"
                visible={false}
                />
                <Card 
                title="Visitation Ministry" 
                desc="We are located at the corner of Dass and Nimblette Street, Enterprise, Chaguanas" 
                visible={false}
                />
                <Card 
                title="Media Ministry" 
                desc="Start watching our services which are streamed live every Sunday and Tuesday" 
                visible={false}
                />
                <Card 
                title="Food Hamper Ministry" 
                desc="Every month, the church selects a family from amongst its memebers or the community to gift a hamper to" 
                visible={false}
                />
              </CardWrapper>
        </>
    )
}

export default Page;