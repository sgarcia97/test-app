import {useState, useEffect} from "react"
import { TfiClose } from "react-icons/tfi";

const SearchBible = () => {
const [searchData, setSearchData] = useState(null)
const [fdata, setFData] = useState(null)
const [data, setData] = useState(null)
const [modal, setModal] = useState(false)

const handleModal = () => {
    setModal(false)
}

const handleResults = (e) => {
    !e.target.value && setModal(false)
}
    const search = (event)=>{
        event.preventDefault()
        const fd = new FormData(event.target)
        setFData(fd.get("query"))
    }

    useEffect(()=>{
        const queryBible = async () => {
            const url = `https://bible-api.com/${fdata}?translation=kjv`
            const request = await fetch(url)
            if(request.ok){
            const data = await request.json()
            setData(data)
            setModal(true)
            }else{
                setModal(false)
            }
        }
        fdata && queryBible()

    },[fdata])
   
    return(
        <>
        <form onSubmit={search}>
            <input className="search" name="query" type="search" onInput={handleResults} placeholder="Search the Bible"/>
            <button type="submit">Search</button>
        </form>
        { modal && (
        <div className="modal-bible"><div className="search-results-header"><TfiClose onClick={handleModal}/></div>{ data ? (data.verses.map((verse)=>{
            return <div className="verse" key={verse.verse}><span>{verse.verse}</span>{verse.text}</div>
        })) : "Verses"}</div>)}
        </>
    )

}

export default SearchBible;