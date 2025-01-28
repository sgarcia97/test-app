import Image from "next/image"

type SectionProps = {
    title:string;
    img:any;
    desc:string;
}
const HomeSection = (props) => {
    return(
        <>
        
        <div className="home-section-wrapper">
            <div className="home-section">
                <div>
                    <div className="home-section-title">{props.title}</div>
                    <p>{props.desc}</p>
                </div>
            </div>
            <div className="home-section"><Image className="home-section-img" height={400} alt="" src={props.img}></Image></div>
        </div>
        </>
    )
}

export default HomeSection;