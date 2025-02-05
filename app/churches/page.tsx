import churches from "../components/churches.json"
import Template from "../components/Template"
import Link from "next/link"
const Page = () => {
let churchesf = churches.sort((a,b)=>{
    if (a.name > b.name) return 1
    if(a.name < b.name) return -1
    return 0
})
    return(
        <>
         <Template title="Churches">
            <div className="church-wrapper">
        {
         
        
           churchesf.map(c => {
            let url = c.url && <> &#8226; <Link className="def-link" target="_blank" href={c.url}>Visit website</Link></>
            return(
            <div key={c.name} className="church">
                <div className="church-name">{c.name}</div>
                <div className="church-location">{c.country} &#8226; {c.location}</div>
                <div className="church-location"><Link className="def-link" target="_blank" href={c.location_url}>Get directions</Link>{url}</div>
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