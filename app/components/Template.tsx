import {Header} from "./Header"
import Footer from "./Footer"
import {Title} from "./Title"
import PageLayout from "./PageLayout"
type Templateprop = {
    children:any;
    title:string;
}

const Template = (props: Templateprop) => {
    return(
        <>
        <Header/>
        <Title title={props.title}/>
        <PageLayout>{props.children}</PageLayout>
        
        <Footer/>
        </>
    )
}

export default Template