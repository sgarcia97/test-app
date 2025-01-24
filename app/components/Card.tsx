import React from "react"
import Image from "next/image"
import {BigButton} from "./Buttons"

type CardProp = {
    title:string;
    desc:string;
    img?:string;
    bname?:string;
    blink?:string;
    visible:boolean;
}

export const Card = (props: CardProp) => {
    return(
        <>
        <div className="card">
            {
                props.img && <Image alt="" src={props.img}/> 
            }
            <div className="card-title">{props.title}</div>
            <div className="card-desc">{props.desc}</div>
            <BigButton title={props.bname && props.bname} link={props.blink && props.blink} isVisible={props.visible}/>
        </div>
        </>
    )
}

type CardWrap = {
    children:any;
    center:boolean;
}
export const CardWrapper = (props: CardWrap) => {
    return(
        <div className={`card-wrapper ${ props.center ? 'center' : ''}` }>
            {props.children}
        </div>
    )
}

