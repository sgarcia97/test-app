"use client"
import {useState, useEffect} from "react"
import Link from "next/link"
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
                <div className="footer-section">
                    <div className="footer-section-title">Site Map</div>
                    <div><Link className="def-link"href="/about">About us</Link></div>
                    <div><Link className="def-link"href="/beliefs">Our Beliefs</Link></div>
                    <div><Link className="def-link"href="/beliefs/gospel">The Gospel</Link></div>
                    <div><Link className="def-link"href="/ministry">Our Ministries</Link></div>
                    <div><Link className="def-link"href="/about">Contact us</Link></div>
                </div>
                <div className="footer-section">
                    <div className="footer-section-title">Resources</div>
                    <div><Link className="def-link"href="/about">About</Link></div>
                    <div><Link className="def-link"href="/about">What we Believe</Link></div>
                    <div><Link className="def-link"href="/about">FBMTT</Link></div>
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
                    <div className="footer-section-title">Follow Us</div>
                    <div><Link className="def-link"href="/about">Facebook</Link></div>
                    <div><Link className="def-link"href="/about">Youtube</Link></div>
                    <div><Link className="def-link"href="/about">The Gospel</Link></div>
                </div>
            </div>
            <div>Copyright &copy; {year} Enterprise Bible Baptist Church. All rights reserved.</div>
        </div>
    )
}

export default Footer;