import { Link, useNavigate } from 'react-router-dom'
import { getAllTopics } from '../../api'
import { useState,useEffect } from 'react'
import { LoggedIn } from './LoggedIn'
export const NavBar = ({specificUser,setSpecificUser,login,setLogin,topic,setTopic}) =>{
    const navigate = useNavigate()
    const [myTopics,setMyTopics] = useState([])
    const [getTopic,setGetTopic] = useState("")
    const [press,setPress] = useState(false)
    useEffect(() =>{
        getAllTopics().then((res) =>{
            setMyTopics(res)
        })
        if(getTopic.length > 1){
            setTopic(myTopics)
            navigate(`/topics/${getTopic}`)
        }

    },[getTopic])
    return <div id="navBar">
        <LoggedIn  specificUser={specificUser}setSpecificUser={setSpecificUser}login={login} setLogin={setLogin}/>
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
     <Link id="midNav" to="/articles"><button className='navBut'>All Articles</button></Link>
     <Link to="/topArticles/"><button className='navBut'>Best Articles</button></Link>
     <Link to="/createArticle"><button className='navBut'>Create Article</button></Link>
     <Link to="/articles/ArticleIdSelector"><button className='navBut'> Search Article By Id</button></Link> 
        </nav>
    </div>
}