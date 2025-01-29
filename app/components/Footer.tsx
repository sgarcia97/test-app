"use client"
import {useState, useEffect} from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/logo.png"
import BibleVerse from "../components/Bible"
type Footerprop = {

}

const Footer = (props: Footerprop) => {
    const [year, setYear] = useState(0);

    useEffect(()=>{
        let d = new Date();
        let y = d.getFullYear();
        setYear(y);
    },[])
    
    return(
      
        <div className="footer">
            <div className="footer-section-wrapper">
                <div className="footer-image-holder"><Image src={Logo} width={120} className="footer-logo" alt=""></Image>
                <BibleVerse/>
                </div>
                <div className="footer-section">
                    <div className="footer-section-title">Site Map</div>
                    <div><Link className="def-link"href="/about">About us</Link></div>
                    <div><Link className="def-link"href="/beliefs">Our Beliefs</Link></div>
                    <div><Link className="def-link"href="/beliefs/gospel">The Gospel</Link></div>
                    <div><Link className="def-link"href="/ministries">Our Ministries</Link></div>
                    <div><Link className="def-link"href="/about">Contact us</Link></div>
                </div>
                <div className="footer-section">
                    <div className="footer-section-title">Resources</div>
                    <div><Link className="def-link"href="https://www.bible.com/bible/1/GEN.1.KJV">Read the Bible</Link></div>
                    <div><Link className="def-link"href="https://www.youtube.com/@enterprisebiblebaptistchur8389">Watch Online</Link></div>
                    <div><Link className="def-link"href="https://fbmtt.org">FBMTT</Link></div>
                </div>
                <div className="footer-section">
                    <div className="footer-section-title">Partner Churches</div>
                    <div><Link className="def-link" href="">Harvest Baptist Church</Link></div>
                    <div><Link className="def-link" href="">Central Baptist Church</Link></div>
                    <div><Link className="def-link" href="">Faith Fundamental Baptist Church</Link></div>
                    <div><Link className="def-link" href="">Redeemed Fundamental Baptist Church</Link></div>
                    <div><Link className="def-link" href="">Cornerstone Baptist Church</Link></div>
                    <div><Link className="def-link" href="">Hope Fundamental Baptist Church</Link></div>
                    <div><Link className="def-link" href="">Trinity Baptist Church</Link></div>
                    <div><Link className="def-link" href="">Chaguanas Fundamental Baptist Church</Link></div>
                    <div><Link className="def-link" href="">Charity Baptist Church</Link></div>
                    <div><Link className="def-link" href="">Bethel Fundamental Baptist Church</Link></div>
                    <div><Link className="def-link" href="">Calvary Fundamental Baptist Church</Link></div>
                </div>
                <div className="footer-section">
                <div className="footer-section-title">Contact Us</div>
                    <div><Link className="def-link" href="tel:8686890908">(868) 689-0908</Link></div>
                    <div className="spacer"></div>
                    <div className="footer-section-title">Visit Us</div>
                    <div><Link className="def-link" href="/about">Corner of Dass Trace & Nibblette Street<br></br>Enterprise, Chaguanas<br></br>Trinidad & Tobago</Link></div>
                    <div className="spacer"></div>
                    <div className="footer-section-title">Follow Us</div>
                    <div><Link className="def-link" href="https://www.facebook.com/enterprisebbc">Facebook</Link></div>
                    <div><Link className="def-link" href="https://www.youtube.com/@enterprisebiblebaptistchur8389">Youtube</Link></div>
                </div>
            </div>
            <div>Copyright &copy; 1999 - {year} Enterprise Bible Baptist Church. All rights reserved.</div>
        </div>
    )
}

export default Footer;