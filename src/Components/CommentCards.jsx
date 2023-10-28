import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteComment } from "../../api"
export const CommentCards = ({specificUser,login, setErrorMessage,commentUpdates,allComments,isSuccess,setIsSuccess}) =>{
    const [isDeletePressed,setIsDeletePressed] = useState(false)
    const [commentObject,setCommentObject] = useState({})
    const [confirmed,setConfirmed] = useState(false)
    const [currentSuccess,setCurrentSuccess] = useState(false)
    const [loading,setLoading] = useState(true)
    const [deleteError,setDeleteError] = useState("")
    useEffect(() =>{
        if (confirmed){
        deleteComment(commentObject.comment_id).then((res) =>{
            if (res === 204){
                setCurrentSuccess(true)
                setLoading(false)
            }else{
                setCurrentSuccess(false)
                setLoading(false)
            }
        })
        }
},[commentUpdates,isDeletePressed,commentObject,confirmed,deleteError,login,isSuccess])
if (!isDeletePressed){
    return  (<ul>
        { allComments.map((comment) =>{
            if (comment.author === specificUser){
            const dateFormatter = (created_at) => {return new Date(created_at).toLocaleDateString()}
            return (<div className="each-comment" key={comment.comment_id}>
            <div id="margin-div">
            <li className="date">{dateFormatter(comment.created_at)}</li>
            <li className="author">{comment.author}</li>
            <li>{comment.body} </li>
            <li><b>Votes: </b>{comment.votes}</li>
            <button onClick={(event) =>{
                event.preventDefault()
                setIsDeletePressed(true)
                setCommentObject((currentObj) =>{
                    return comment
                })
            }} id="deleteComment">delete your comment Here</button>
            </div>
            </div>)
            }else{
                const dateFormatter = (created_at) => {return new Date(created_at).toLocaleDateString()}
                return (<div className="each-comment" key={comment.comment_id}>
                <div id="margin-div">
                <li className="date">{dateFormatter(comment.created_at)}</li>
                <li className="author">{comment.author}</li>
                <li>{comment.body} </li>
                <li><b>Votes: </b>{comment.votes}</li>
                </div>
                </div>)
        }
    }) 
}
   </ul>) 
}else{
    if (!confirmed){
    const dateFormatter = (created_at) => {return new Date(created_at).toLocaleDateString()}
    return (<div className="each-comment" key={commentObject.comment_id}>
    <div id="margin-div">
    <li className="date"><b>Date:</b> {dateFormatter(commentObject.created_at)}</li>
    <h3>The comment you selected to delete is:</h3>
    <li><b></b> {commentObject.body} </li>
    <li><b>Votes: </b>{commentObject.votes}</li>
    <p>{deleteError}</p>
    <button id="confirmDelete"className="deleteCommentButton" onClick={() =>{
        if(login){
        setConfirmed(!confirmed)
        }else{
            console.log(deleteError)
            setDeleteError("you are not logged in, please login and try again")
        }
    }}>Delete</button>
    <button className="deleteCommentButton" onClick={() =>{
        setIsDeletePressed(false)
    }}>Go Back</button>
    </div>
    </div>)
    }else if (confirmed){
        if (loading){
            return (<h3>Loading...</h3>)
        }else{
            if(currentSuccess){
                return (<div>
                    <h2>Succesfully Deleted</h2>
                    <button onClick={(event) =>{
                        event.preventDefault()
                        setIsDeletePressed(false)
                        setIsSuccess(currentSuccess)
                        setConfirmed(false)
                        setCurrentSuccess(false)
                        setCommentObject({})
                    }}>Click here to go back</button>
                     </div>)

            }else{
                return (<div><h2>This has not been deleted Succesfully, try again later</h2>
                        <button onClick={(event) =>{
                        event.preventDefault()
                        setCommentObject({})
                        setIsDeletePressed(false)
                        setConfirmed(false)
                        setIsSuccess(currentSuccess)
                        setCurrentSuccess(false)
                        setErrorMessage("Comment Not deleted Succesfully")
                    }}>Click here to go back to the article</button>                
                    </div>) }
        }
    }
}
}