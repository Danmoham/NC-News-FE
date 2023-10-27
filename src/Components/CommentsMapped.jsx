import { getCommentsOnArticle } from "../../api"
import { useEffect,useState } from "react"
import { CommentCards } from "./CommentCards"
export const CommentsMapped = ({setErrorMessage,isSuccess,setIsSuccess,user,login, setLoadingNewComment, loadingNewComment, commentUpdates, setCommentUpdates, id}) =>{
    const [allComments,setAllComments] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [deleteMessage,setDeleteMessage] = useState("")
    const [manualRerender,setManualReRender] = useState(false)
    useEffect(() =>{
        getCommentsOnArticle(id).then((comments) =>{
            setIsLoading(false)
            setAllComments(comments)
        })
        setIsLoading(true)
        setIsSuccess(false)
        
    },[commentUpdates,loadingNewComment,isSuccess,deleteMessage,])
      return (
        <div>
          {!isLoading ? (
            <div>
            <main> {<CommentCards manualRerender={manualRerender} setManualReRender={setManualReRender} setErrorMessage={setErrorMessage} setIsSuccess={setIsSuccess} isSuccess={isSuccess} id={id}user={user} login={login} setLoadingNewComment={setLoadingNewComment} loadingNewComment={loadingNewComment} commentUpdates={commentUpdates} setAllComments={setAllComments} allComments = {allComments}/>} </main>
            </div>
          ) : (
            <h2>Loading....</h2>
          )}
        </div>
      ); 
      }