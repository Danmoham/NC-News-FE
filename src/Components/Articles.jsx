import { ArticleCards } from "./ArticleCard"
import { useEffect,useState } from "react"
import { getAllArticles } from "../../api"
import { SortBy } from "./SortBy"
export const Articles = () =>{
    const [allArticles,setAllArticles] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [ordered,setOrdered] = useState(true)
    const [sortingObject,setSortingObject] = useState({query : "", order : "asc"})
    useEffect(() =>{
      if ((sortingObject.query.length === 0) && (sortingObject.order === "asc")){
        getAllArticles().then((displayArticles) =>{
            setIsLoading(false)
            setAllArticles(displayArticles)
        }) 
      }
        
    },[])
      return (
        <div>
          {!isLoading ? (
            <div>
            <h2>Please see all articles below</h2>
            {<SortBy ordered={ordered} setOrdered={setOrdered}/>}
            <main> {<ArticleCards allArticles = {allArticles}/>} </main>
            </div>
          ) : (
            <h2>Loading....</h2>
          )}
        </div>
      ); 
      }