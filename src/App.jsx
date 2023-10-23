import { useState } from 'react'
import { Header } from './Components/Header'
import { Articles } from './Components/Articles'
import { Route,Routes } from 'react-router-dom'
import { ArticleIdSelector } from './Components/ArticleIdSelector'
import { NavBar } from './Components/NavBar'
import { ArticleById } from './Components/ArticleById'

function App() {

  return (<div>
    <Header/>
    < NavBar/>
    <Routes>
      <Route path="/" element={<Articles/>}/>
      <Route path='/articles' element={<Articles/>}/>
      <Route path="/Home" element={<Articles/>} />
      <Route path='/Articles/ArticleIdSelector' element={<ArticleIdSelector/>} />
      <Route path="/Articles/ArticleIdSelector/:final_id" element={<ArticleById/>} />
    </Routes>
  </div>
  )
}

export default App
