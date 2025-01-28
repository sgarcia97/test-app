'use client'
import { useState} from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Logo from "../../public/logo.png"
import { CgMenuRight } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";



export const Header = () => {

    const [modal, setModal] = useState(false);

    const handleModal = ()=>{
        setModal(true)
    }

    return(
        <>
        <nav className="nav">
            <Image src={Logo} alt="" width={30} height={30}></Image>
        <div onClick={handleModal} className="menu-button"> <CgMenuRight className="menu-icon" /></div>
        
        </nav>
        <Modall showModal={modal} set={setModal} />
        </>
    )
}

type ModalProps = {
    showModal:boolean;
    set:any;
}
export const Modall = (props: ModalProps) => {    
    return(
        <>
        {
            props.showModal && <div className="modal">
                <NavLink link="/" title="Home"/>
                <NavLink link="/about" title="About"/>
                <NavLink link="/beliefs" title="Beliefs"/>
                <NavLink link="/beliefs/gospel" title="The Gospel"/>
                <NavLink link="/ministries" title="Ministry"/>
                <NavLink link="/live" title="Live"/>
                <NavLink link="/contact" title="Contact"/>
                <div className="close" onClick={()=>{props.set(false)}}><TfiClose className="close-icon"/></div>
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

