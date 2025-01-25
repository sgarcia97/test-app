import React from "react"
import {Header} from "../components/Header"
import {Paragraph, Title} from "../components/Title"
import PageLayout from "../components/PageLayout"
import {Card, CardWrapper} from "../components/Card"

const Page = () => {
    return(
        <>
        <Header/>
        <Title title="ministries"/>
        <PageLayout>
            <p className="page-subtitle">We have a wide variety of ministries for you get involved in. God ahs called us to serve in whatever capacity we would and there is no better place to start than allowing Jesus to take the helm of our lives. Get involved.</p>
        <CardWrapper center={true}>
                <Card 
                title="Men's Ministry" 
                desc="Let us help you get started quickly with our helpful resources" 
                visible={false}
                />
                <Card 
                title="Women's Ministry" 
                desc="Learn more about the gospel and what it means to be saved" 
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
              </PageLayout>
        </>
    )
}

export default Page;