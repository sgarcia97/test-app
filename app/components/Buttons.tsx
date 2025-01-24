import Link from "next/link"


type Button = {
    title?:string;
    link?:string;
    isVisible:boolean;
}


export const BigButton = ({title="", link="", ...props}: Button) => {
    return(
       <>
        {props.isVisible && <Link href={link}><button className="button-big">{title}</button></Link> }
        </>
    )
} 

export const SmallButton = ({title="", link="", ...props}: Button) => {
    return(
       <>
        {props.isVisible && <Link href={link}><button className="button-small">{title}</button></Link> }
        </>
    )
} 