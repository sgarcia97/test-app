'use client'
import churches from "../components/churches.json"
import Template from "../components/Template"
import {useState, useEffect} from "react"
import Link from "next/link"
const Page = () => {
const [sort, setSort] = useState('name')
const [search, setSearch] = useState('')
const [churchesf, setChurchesf] = useState(churches)

const handleSort = (event) => {
    const results = churches.sort((a,b)=>{
        if(event.target.value == "name"){
            return (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0;
        }
        if(event.target.value == "country"){    
            return (a.country > b.country) ? 1 : (a.country < b.country) ? -1 : 0;  
        }
        })
        setSort(event.target.value)
        setChurchesf(results)
    }

const handleSearch = (event) => {
    const results = churches.filter((church) => {
        if(event.target.value === '') return churches 
        return church.name.toLowerCase().includes(event.target.value.toLowerCase())
        }
    )
    setSearch(event.target.value)
    setChurchesf(results)
}
    return(
        <>
         <Template title="Churches">
            <div className="church-header">
                <input placeholder="Search churches" type="search" onInput={handleSearch}/>
            <select onChange={handleSort}>
                <option value="name">Sort by Name</option>
                <option value="country">Sort by Country</option>
            </select>
            <div>List sorted by &quot;{sort}&quot; | Searching for {search}</div>
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