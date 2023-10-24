import { CommentsMapped } from "./CommentsMapped"
import { useState,useEffect } from "react"
export const SpecificArticleCard = ({onlyArticle, Id}) =>{
    const dateFormatter = (created_at) => {return new Date(created_at).toLocaleDateString()}
    const myObject = onlyArticle
         return ( <div>{onlyArticle.article_id ? (<div className="each-article" key={myObject.article_id}>
            <li><b>Article Id: </b>{myObject.article_id}</li>
            <li><b>Author: </b>{myObject.author}</li>
            <li><b>Title: </b> {myObject.title} </li>
            <li><b>Topic:</b> {myObject.topic}</li>
            <li><b>Date when the article was created :</b> {dateFormatter(myObject.created_at)}</li>
            <img src={myObject.article_img_url} alt="image of the item article"/>
            <li><b>Votes: </b>{myObject.votes}</li>
            <li><b>Comment Count:</b> {myObject.comment_count}</li>
                <CommentsMapped Id={Id} />
            </div>) : (
                <div>
                    <h3>Invalid Article ID</h3>
                </div>
                
            )}
            </div>)

}