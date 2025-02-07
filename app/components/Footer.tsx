"use client"
import {useState, useEffect} from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/logo.png"
import BibleVerse from "../components/Bible"
import Churches from "../components/churches.json"
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
                    <div><Link className="def-link" target="_blank" href="https://www.bible.com/bible/1/GEN.1.KJV">Read the Bible</Link></div>
                    <div><Link className="def-link" href="/live">Watch Online</Link></div>
                    <div><Link className="def-link" target="_blank" href="https://https://fbmtt.org">FBMTT</Link></div>
                </div>
                <div className="footer-section">
                    <div className="footer-section-title">Partner Churches</div>
                    {
                        Churches.map((church)=>{
                            return <div key={church.name}><Link className="def-link" target="_blank" href={church.location_url}>{church.name}</Link></div>
                        })
                    }
                </div>
                <div className="footer-section">
                <div className="footer-section-title">Contact Us</div>
                    <div><Link className="def-link" href="tel:8686890908">(868) 689-0908</Link></div>
                    <div className="spacer"></div>
                    <div className="footer-section-title">Visit Us</div>
                    <div><Link className="def-link" target="_blank" href="https://www.google.ca/maps/dir//Enterprise+Bible+Baptist+Church,+10%C2%B032'00.+61%C2%B023'11.5%22W+9th+Street+Chaguanas,+Trinidad+and+Tobago/@10.5335993,-61.3891103,17z/data=!4m17!1m7!3m6!1s0x8c35f93d3e43ebb9:0x39b332b84bd77b91!2sEnterprise+Bible+Baptist+Church!8m2!3d10.533594!4d-61.38653!16s%2Fg%2F11c5s9d092!4m8!1m0!1m5!1m1!1s0x8c35f93d3e43ebb9:0x39b332b84bd77b91!2m2!1d-61.3865458!2d10.5336485!3e3?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D">Corner of Dass Trace & Nibblette Street<br></br>Enterprise, Chaguanas<br></br>Trinidad & Tobago</Link></div>
                    <div className="spacer"></div>
                    <div className="footer-section-title">Follow Us</div>
                    <div><Link className="def-link" target="_blank" href="https://www.facebook.com/enterprisebbc">Facebook</Link></div>
                    <div><Link className="def-link" target="_blank" href="https://www.youtube.com/@enterprisebiblebaptistchur8389">Youtube</Link></div>
                </div>
            </div>
            <div>Copyright &copy; 1999 - {year} Enterprise Bible Baptist Church. All rights reserved.</div>
        </div>
    )
}

export default Footer;