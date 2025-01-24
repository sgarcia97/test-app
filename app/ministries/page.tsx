import React from "react"
import {Header} from "../components/Header"
import {Card, CardWrapper} from "../components/Card"

const Page = () => {
    return(
        <>
        <Header/>
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
        </>
    )
}

export default Page;