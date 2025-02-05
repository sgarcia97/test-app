'use client'
import churches from "../components/churches.json"
import Template from "../components/Template"
import {useState} from "react"
import Link from "next/link"
const Page = () => {
const [sort, setSort] = useState('name')
let churchesf = churches.sort((a,b)=>{
if(sort == "name")
    return (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0
if(sort == "country")  
    return (a.country > b.country) ? 1 : (a.country < b.country) ? -1 : 0
})

const handleSort = (event) => {
    setSort(event.target.value)
}
    return(
        <>
         <Template title="Churches">
            <div className="church-header">
            <select onChange={handleSort}>
                <option value="name">Name</option>
                <option value="country">Country</option>
            </select>
            <div>List sorted by &quot;{sort}&quot;</div>
            </div>
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