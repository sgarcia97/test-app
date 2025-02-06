'use client'
import { useState} from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Logo from "../../public/logo.png"
import { CgMenuRight } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";
import SearchBible from "../components/SearchBible"




export const Header = () => {

    const [modal, setModal] = useState(false);

    const handleModal = ()=>{
        setModal(true)
    }

    const closeModal = ()=>{
        setModal(false)
    }

    return(
        <>
        <nav className="nav">
            <Image src={Logo} alt="" width={30} height={30}></Image>
            <SearchBible/>
        <div onClick={handleModal} className="menu-button"> <CgMenuRight className="menu-icon" /></div>
        
        </nav>
        {modal && <Modall cm={closeModal} />}
        </>
    )
}

type ModalProps = {
    cm:any;
}
export const Modall = (props: ModalProps) => {    
    return(
        <>
        {
            <div className="modal">
                <NavLink link="/" title="Home"/>
                <NavLink link="/about" title="About us"/>
                <NavLink link="/beliefs" title="Beliefs"/>
                <NavLink link="/beliefs/gospel" title="The Gospel"/>
                <NavLink link="/ministries" title="Ministry"/>
                <NavLink link="/live" title="Live services"/>
                <NavLink link="/contact" title="Contact us"/>
                <NavLink link="/churches" title="Partner Churches"/>
                <div className="close" onClick={props.cm}><TfiClose className="close-icon"/></div>
            </div>
        }
        </>
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

