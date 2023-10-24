import { getCommentsOnArticle } from "../../api"
import { useEffect,useState } from "react"
import { CommentCards } from "./CommentCards"
export const CommentsMapped = ({id}) =>{
    const [allComments,setAllComments] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() =>{
        getCommentsOnArticle(id).then((comments) =>{
            setIsLoading(false)
            setAllComments(comments)
        })
        
    },[])
      return (
        <div>
          {!isLoading ? (
            <div>
            <h3>Please see all comments below for this Article</h3>
            <main> {<CommentCards allComments = {allComments}/>} </main>
            </div>
          ) : (
            <h2>Loading....</h2>
          )}
        </div>
      ); 
      }