import { Link, useNavigate } from 'react-router-dom'
import { getAllTopics } from '../../api'
import { useState,useEffect } from 'react'
export const NavBar = () =>{
    const navigate = useNavigate()
    const [myTopics,setMyTopics] = useState([])
    const [getTopic,setGetTopic] = useState("")
    const [press,setPress] = useState(false)
    useEffect(() =>{
        getAllTopics().then((res) =>{
            setMyTopics(res)
        })
        if(getTopic.length > 1){
            navigate(`/topics/${getTopic}`)
        }

    },[getTopic])
    return <div id="navBar">
        <nav >
        <select onChange={((event) =>{
            event.preventDefault()
            setPress(true)
            if(setPress){
            setGetTopic(event.target.value)
            }
        }) }>
        <option>All Topics</option>
        {myTopics.map((topic) =>{
            return <option to="/articles" key={topic.slug} value={topic.slug}>{topic.slug}</option>
        })}
        </select>
     <Link to="/articles"><button className='navBut'>All Articles</button></Link>   <Link to="/articles/ArticleIdSelector"><button className='navBut'> Search Article By Id</button></Link>
        </nav>
    </div>
}