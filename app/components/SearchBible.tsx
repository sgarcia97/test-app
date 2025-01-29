import {useState, useEffect} from "react"
import { TfiClose } from "react-icons/tfi";

const SearchBible = () => {
const [searchData, setSearchData] = useState(null)
const [data, setData] = useState(null)
const [modal, setModal] = useState(false)

const handleModal = () => {
    setModal(false)
}
    const search = (formData)=>{
         const query = formData.get("query");
         setSearchData(query)
    }

    useEffect(()=>{
        const queryBible = async () => {
            const url = `https://bible-api.com/${searchData}?translation=kjv`
            const request = await fetch(url)
            const data = await request.json()
            setData(data)
            setModal(true)
        }
        searchData && queryBible()

    },[searchData])
   
    return(
        <>
        <form action={search}>
            <input className="search" name="query" type="search" placeholder="Search the Bible"/>
            <button type="submit">Search</button>
        </form>
        { modal && (
        <div className="modal-bible"><div className="search-results-header"><TfiClose onClick={handleModal}/></div>{ data ? (data.verses.map((verse)=>{
            return <div className="verse" key={verse.bible_id}><span>{verse.verse}</span>{verse.text}</div>
        })) : "Verses"}</div>)}
        </>
    )

}

export default SearchBible;