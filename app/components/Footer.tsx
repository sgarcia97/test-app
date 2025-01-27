
type Footerprop = {

}

const Footer = (props: Footerprop) => {
    let d = new Date()
    let y = d.getFullYear();
    return(
        <div className="footer">
            <div>Copyright &copy; {y} Enterprise Bible Baptist Church. All rights reserved.
        </div>
    )
}

export default Footer;