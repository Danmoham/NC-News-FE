import { ArticleCards } from "./ArticleCard"
import { useEffect,useState } from "react"
import { getAllArticles } from "../../api"
import { SortBy } from "./SortBy"
import { getAllArticlesOrdered } from "../../api"
export const Articles = () =>{
    const [allArticles,setAllArticles] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [ordered,setOrdered] = useState(true)
    const [sorting,setSorting] = useState("created_at")
    useEffect(() =>{
            getAllArticlesOrdered(sorting,ordered).then((displayArticles) =>{
            setIsLoading(false)
            setAllArticles(displayArticles)
        }) 
      
        
    },[ordered,sorting])
      return (
        <div>
          {!isLoading ? (
            <div>
            <h2>Please see all articles below</h2>
            {<SortBy  sorting={sorting} setSorting={setSorting} ordered={ordered} setOrdered={setOrdered}/>}
            <main> {<ArticleCards allArticles = {allArticles}/>} </main>
            </div>
          ) : (
            <h2>Loading....</h2>
          )}
        </div>
      ); 
      }