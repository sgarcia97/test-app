import {useState} from "react"
type Footerprop = {

}

const Footer = (props: Footerprop) => {
    const [year, setYear] = useState(0)
    let d = new Date()
    let y = d.getFullYear();
    setYear(y)
    return(
<>
        <div className="footer">
            <div>Copyright &copy; {year} Enterprise Bible Baptist Church. All rights reserved.
        </div>
</>
    )
}

export default Footer;