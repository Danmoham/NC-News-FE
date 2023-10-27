import { useState } from 'react'
import { Header } from './Components/Header'
import { Articles } from './Components/Articles'
import { Route,Routes } from 'react-router-dom'
import { ArticleIdSelector } from './Components/ArticleIdSelector'
import { NavBar } from './Components/NavBar'
import { ArticleById } from './Components/ArticleById'
import { LoggedIn } from './Components/LoggedIn'
import { SpecificTopic } from './Components/SpecificTopic'
import { SortBy } from './Components/SortBy'
import { SpecificComment } from './Components/SpecificComment'
import { ErrorPage } from './ErrorPage'
function App() {
  const [login,setLogin] = useState(false)
  const [topic,setTopic] = useState("")
  const [user,setUser] = useState("grumpy19")
  return (<div>
    <Header/>
    <div id="mainDiv">
    < NavBar login={login} setLogin={setLogin} topic={topic} setTopic={setTopic}/>
    </div>
    <Routes>
      <Route path="/" element={<Articles/>}/>
      <Route path='/articles' element={<Articles/>}/>
      <Route path="/Home" element={<Articles/>} />
      <Route path='/Articles/ArticleIdSelector' element={<ArticleIdSelector/>} />
      <Route path="/Articles/ArticleIdSelector/:final_id" element={<ArticleById setLogin={setLogin} user={user}login={login}/>} />
      <Route path="/Articles/:final_id" element={<ArticleById setLogin={setLogin} user={user}login={login}/>} />
      <Route path="/topics/:topic_name" element={<SpecificTopic topic={topic} setTopic={setTopic}/>}/> 
      <Route path="Topics/all topics" element={<Articles/>}/>
      <Route path="/*" element={<ErrorPage/>} />
    </Routes>
  </div>
  )
}

export default App
