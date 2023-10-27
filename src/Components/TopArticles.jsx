import { getBestArticles } from "../../api"
import { useState,useEffect } from "react"
import { ArticleCards } from "./ArticleCard"
export const TopArticles = () =>{
    const [allArticles,setAllArticles] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() =>{
        getBestArticles().then((displayArticles) =>{
            setIsLoading(false)
            setAllArticles(displayArticles)
        })
    },[])
    if (!isLoading){
    return <div><h2>The Top 10 Articles!</h2>
        <main>{<ArticleCards allArticles={allArticles}/>}</main>
    </div>
    }else{
        return <div><h2>Loading....</h2> </div>
    }
}