import { useState } from 'react'
import { Header } from './Components/Header'
import { Articles } from './Components/Articles'
import { Route,Routes } from 'react-router-dom'
import { ArticleIdSelector } from './Components/ArticleIdSelector'
import { NavBar } from './Components/NavBar'
import { ArticleById } from './Components/ArticleById'
import { Topics } from './Components/Topics'
import { LoggedIn } from './Components/LoggedIn'
function App() {
  const [login,setLogin] = useState(false)
  return (<div>
    <Header/>
    <LoggedIn  login={login} setLogin={setLogin}/>
    < NavBar/>
    <Routes>
      <Route path="/" element={<Articles/>}/>
      <Route path='/articles' element={<Articles/>}/>
      <Route path="/Home" element={<Articles/>} />
      <Route path='/Articles/ArticleIdSelector' element={<ArticleIdSelector/>} />
      <Route path="/Articles/ArticleIdSelector/:final_id" element={<ArticleById login={login}/>} />
      <Route path="/Articles/:final_id" element={<ArticleById  login={login}/>} />
      <Route path="/Articles/Topics" element={<Topics/>} />
    </Routes>
  </div>
  )
}

export default App
