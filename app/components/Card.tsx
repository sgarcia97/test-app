import React from "react"
import Image from "next/image"
import Link from "next/link"

type CardProp = {
    title:string;
    desc:string;
    img?:string;
    bname:string;
    blink:string;
}

export const Card = (props: CardProp) => {
    return(
        <div className="card">
            {
                props.img ? <Image alt="" src={props.img}/> : ''
            }
            <div className="card-title">{props.title}</div>
            <div className="card-desc">{props.desc}</div>
            <Link href={props.blink}><button>{props.bname}</button></Link>
        </div>
    )
}

type CardWrap = {
    children:any;
}
export const CardWrapper = (props: CardWrap) => {
    return(
        <div className="card-wrapper">
            {props.children}
        </div>
    )
}

