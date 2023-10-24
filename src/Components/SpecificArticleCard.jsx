import { CommentsMapped } from "./CommentsMapped"
import { useState,useEffect } from "react"
import { patchVotesOnArticle } from "../../api"
export const SpecificArticleCard = ({ onlyArticle, id}) =>{
    const dateFormatter = (created_at) => {return new Date(created_at).toLocaleDateString()}
    const [currentVote,setCurrentVote] = useState(0)
    const [errorMessage,setErrorMessage] = useState("")
    const updateLikes = (value) =>{
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
        patchVotesOnArticle(id,currentVote)

    },[currentVote])
    const myObject = onlyArticle
         return ( <div>{onlyArticle.article_id ? (<div className="each-article" key={myObject.article_id}>
            <h3> {myObject.title} </h3>
            <li><b>Article Id: </b>{myObject.article_id}</li>
            <li><b>Author: </b>{myObject.author}</li>
            <li><b>Topic:</b> {myObject.topic}</li>
            <li><b>Date when the article was created :</b> {dateFormatter(myObject.created_at)}</li>
            <img src={myObject.article_img_url} alt="image of the item article"/>
            <li><b>Votes: </b>{myObject.votes + currentVote}</li>
            <button className="voteButtons" id="like" onClick={() =>{
                updateLikes(1)
            }}>Like</button>
            <button className="voteButtons"  id="dislike" onClick={()=>{
                updateLikes(-1)
            }}>Dislike</button>
            <p id="selectorError">{errorMessage}</p>
            <li><b>Comment Count:</b> {myObject.comment_count}</li>
                <CommentsMapped id={id} />
            </div>) : (
                <div>
                    <h3>Invalid Article ID</h3>
                </div>
                
            )}
            </div>)

}