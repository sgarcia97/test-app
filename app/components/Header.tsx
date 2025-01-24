'use client'
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export const Header = () => {
    return(
        <nav className="nav">
        
        <NavLink link="/" title="Home"/>
        <NavLink link="/about" title="About"/>
        <NavLink link="/beliefs" title="Beliefs"/>
        <NavLink link="/beliefs/gospel" title="The Gospel"/>
        <NavLink link="/ministries" title="Ministries"/>
        <NavLink link="/live" title="Live"/>
        <NavLink link="/contact" title="Contact"/>
        </nav>
    )
}

type NavProps ={
    link:string;
    title:string;
}
export const NavLink = (props: NavProps) => {
    const pathname = usePathname()
    return(
        <Link className={pathname === props.link ? 'active-link': 'def'} href={props.link}>{props.title}</Link>
    )
}

