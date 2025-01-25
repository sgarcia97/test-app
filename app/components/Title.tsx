import { LuChurch } from "react-icons/lu";

type TitleProp = {
    title:string;
}

export const Title = (props:TitleProp) => {
    return(
        <div className="page-title-wrapper">
            <LuChurch className="page-title-icon" />
        <div className="page-title">{props.title}</div>
        </div>
    )
}

type ParagraphProp = {
    content:string;
}
export const Paragraph = (props: ParagraphProp) => {
    return(
        <div className="page-title">{props.content}</div>
    )
}

