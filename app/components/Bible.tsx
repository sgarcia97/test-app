'use client'
 
import { useState, useEffect } from 'react'
 
export const BibleVerse = () => {
  const [posts, setPosts] = useState(null)
 
  useEffect(() => {
    const fetchPosts = async () => {
      //const url = 'https://jobs-api14.p.rapidapi.com/v2/list?query=Web%20Developer&location=United%20States&autoTranslateLocation=true&remoteOnly=false&employmentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor';
      const url = "https://bible-api.com/data/kjv/random/NT"
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.NEXT_PUBLIC_JOBS_KEY,
		'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
	}
};
      const res = await fetch(url)
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])
 
  if (!posts) return <div>Getting Bible verse...</div>
 
  return (

    <>
      <div>{posts.random_verse.text}<br></br>{`${posts.random_verse.book} ${posts.random_verse.chapter}:${posts.random_verse.verse}`}</div>
      {//posts.jobs.map((post) => (
        //<li key={post.id}>{post.title}</li>
      //))
      }
    </>
  )
}

export default BibleVerse