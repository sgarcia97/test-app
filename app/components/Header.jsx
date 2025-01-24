import React from "react"
import Link from "next/link"
import Image from "next/image"

export const Header = () => {
    return(
        <nav className="nav">
        
        <NavLink link="/" title="Home"/>
        <NavLink link="/about" title="About"/>
        <NavLink link="/gospel" title="The Gospel"/>
        <NavLink link="/ministries" title="Ministries"/>
        <NavLink link="/live" title="Live"/>
        <NavLink link="/contact" title="Contact"/>
        </nav>
    )
}


export const NavLink = (props) => {
    return(
        <Link href={props.link}>{props.title}</Link>
    )
}

