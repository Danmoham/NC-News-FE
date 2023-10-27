import { CommentsMapped } from "./CommentsMapped"
import { useState,useEffect } from "react"
import { patchVotesOnArticle } from "../../api"
import { CommentPoster } from "./CommentPoster"
import { Link } from "react-router-dom"
export const SpecificArticleCard = ({isSuccess,setIsSuccess, setOnlyArticle, user,login,setCommentUpdates, commentUpdates, onlyArticle, id}) =>{
    const [loadingNewComment, setLoadingNewComment] = useState(false) 
    const dateFormatter = (created_at) => {return new Date(created_at).toLocaleDateString()}
    const [currentVote,setCurrentVote] = useState(0)
    const [errorMessage,setErrorMessage] = useState("")
    const [send, setSend] = useState(false)
    const updateLikes = (value) =>{
        setSend(true)
        if (currentVote+value > -2 && currentVote+value < 2){
            setErrorMessage("")
            setCurrentVote((currentVote) =>{
            return currentVote + value;
        })
    }else if ((currentVote + value) > 1){
        setErrorMessage("You have already liked this post!")
    }else{
        setErrorMessage("You have already disliked this post!")
    }
    }

    useEffect(() =>{
        if (send){
        patchVotesOnArticle(id,currentVote).then((res)=>{
            if ((res === 404) || (res === 400) || (res === 500)){
                setErrorMessage("Connection lost to server, vote not registered")
                setCurrentVote(0)
            }
    })


}},[currentVote,commentUpdates,isSuccess,errorMessage])
    const myObject = onlyArticle
         return ( <div>{onlyArticle.article_id ? (<div className="each-article" key={myObject.article_id}>
            <li><b>Author: </b>{myObject.author}</li>
            <li><b>Topic:</b> {myObject.topic}</li>
            <h2> {myObject.title} </h2>
            <p>{myObject.body}</p>
            <br></br>
            <img src={myObject.article_img_url} alt="image of the item article"/>
            <li><b>Date:</b> {dateFormatter(myObject.created_at)}</li>
            <li><b>Votes: </b>{myObject.votes + currentVote}</li>
            <button className="voteButtons" id="like" onClick={() =>{
                updateLikes(1)
            }}>Like</button>
            <button className="voteButtons"  id="dislike" onClick={()=>{
                updateLikes(-1)
            }}>Dislike</button>
            <p id="selectorError">{errorMessage}</p>
            <li><b>Comment Count:</b> {myObject.comment_count}</li>
                <CommentPoster setIsSuccess={setIsSuccess} isSuccess={isSuccess} login={login} setLoadingNewComment={setLoadingNewComment} loadingNewComment={loadingNewComment} setCommentUpdates ={setCommentUpdates} commentUpdates={commentUpdates} id={id}/>
                <CommentsMapped setErrorMessage={setErrorMessage}isSuccess={isSuccess} setIsSuccess={setIsSuccess} user={user} login={login}setCommentUpdates= {setCommentUpdates} setLoadingNewComment={setLoadingNewComment} loadingNewComment={loadingNewComment} commentUpdates={commentUpdates} id={id} />
                
            </div>) : (
                <div>
                    <h3>Oops.... You typed in the wrong id!</h3>
                    <div className="wrongElement">
                    <Link to="/articles"><button>Click here to go home</button></Link>
                    </div>
                </div>
                
            )}
            </div>)

}