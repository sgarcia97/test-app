

const Landing = (props) => {

    return(
        <div className="landing-wrapper">
            <div className="landing-img">
                <div className="landing-img-border"></div>
                
            </div>
            <div className="landing-content">
                    <div className="landing-title">{props.title}</div>
                    <div className="landing-subtitle">{props.subtitle}</div>
                </div>
        </div>
    )
}

export default Landing;