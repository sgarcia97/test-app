import {Title, Paragraph} from "../components/Title"
import PageLayout from "../components/PageLayout"
import {Header} from "../components/Header"
const Page = () => {
    return(
        <>
        <Header/>
        <Title title="Contact"/>
        <PageLayout>
            <p>Contact us.</p>
        </PageLayout>
        </>
    )
}

export default Page;

