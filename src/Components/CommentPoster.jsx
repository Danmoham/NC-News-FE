import { useEffect,useState } from "react"
import { postComments } from "../../api"
export const CommentPoster = ({login,loadingNewComment,setLoadingNewComment, id,setCommentUpdates}) =>{
     const [currentInput, setCurrentInput] =useState("")
     const [finalInput,setFinalInput] =useState("")
     const [errorMessage,setErrorMessage] = useState("")
     const [completeMessage,setCompleteMessage] = useState("")
     const [proceed,setProceed] = useState(false)
     const SubmitFunction = (event) =>{
          event.preventDefault()
          setErrorMessage("")
          if(!login){
               setErrorMessage("You are not Logged in, please log in to post a comment")
          }else if(!(currentInput.split(" ").join("").length === 0)){
               setProceed(true)
               setFinalInput(currentInput)
               setCurrentInput("")
          }else{
               setErrorMessage("Please add text to your comment before submitting.")
          }
     }
     useEffect(() =>{
          if(proceed){
          setLoadingNewComment(true)
          postComments(id,finalInput).then((res) =>{
          if (res.status === 201){
               setLoadingNewComment(false)
               setCompleteMessage(`This has now been posted`)
               setCommentUpdates(true)
          }else{
          setLoadingNewComment(false)
          setErrorMessage(`The posting for this comment has failed. Please try again Later.`)
          setCommentUpdates(true)
          
          }})
          }
     },[finalInput])

return (<div> {!loadingNewComment ? (<form onSubmit={SubmitFunction}>
    <label>Add comment:</label> 
<input value={currentInput} id="commentBox"placeholder="Type text here" onChange={(event) =>{
     const myTarget = event.target.value
     setErrorMessage("")
     setCurrentInput(() =>{
          return myTarget
     })
     setCompleteMessage("")
}}></input>
<button>Post</button>
<p id="selectorError">{errorMessage}</p>
<p id="completeMessage">{completeMessage}</p>
</form> ): (
    <p>Adding comment...</p> 
)}
</div>
)
}