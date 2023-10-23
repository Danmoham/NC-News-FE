import { ArticleCards } from "./ArticleCard"
import { useEffect,useState } from "react"
import { getAllArticles } from "../../api"
export const Articles = () =>{
    const [allArticles,setAllArticles] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() =>{
        getAllArticles().then((displayArticles) =>{
            setIsLoading(false)
            setAllArticles(displayArticles)
        })
        
    },[])
      return (
        <div>
          {!isLoading ? (
            <div>
            <h2>Please see all articles below</h2>
            <main> {<ArticleCards allArticles = {allArticles}/>} </main>
            </div>
          ) : (
            <h2>Loading....</h2>
          )}
        </div>
      ); 
      }