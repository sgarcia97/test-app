import churches from "../components/churches.json"
import Template from "../components/Template"
const Page = () => {

    return(
        <>
         <Template title="Churches">
            <div className="church-wrapper">
        {
           churches.map(c => {
            return(
            <div key={c.name} className="church">
                <div className="church-name">{c.name}</div>
                <div className="church-location">{c.location}</div>
                <div>{c.pastor}</div>
            </div>)
           })
        }
        </div>
        </Template>
        </>
    )
}

export default Page;