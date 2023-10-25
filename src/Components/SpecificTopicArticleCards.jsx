import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
export const SpecificTopicArticleCards = ({finalTopicArticles}) =>{
    return (
        <div>  
        {finalTopicArticles.length > 0  ? ( 
        <ul>{
         finalTopicArticles.map((article) =>{
            const dateFormatter = (created_at) => {return new Date(created_at).toLocaleDateString()}
            return (<div className="each-article" key={article.article_id}>
           <h3><Link id = "myTitle"to={`/articles/ArticleIdSelector/${article.article_id}`}>{article.title}</Link> </h3>
            <li><b>Article Id: </b>{article.article_id}</li>
            <li><b>Author: </b>{article.author}</li>
            <li><b>Topic:</b> {article.topic}</li>
            <li><b>Date when the article was created :</b> {dateFormatter(article.created_at)}</li>
            <img src={article.article_img_url} alt="image of the item article"/>
            <li><b>Votes: </b>{article.votes}</li>
            <li><b>Comment Count:</b> {article.comment_count}</li>
            <Link to={`/articles/ArticleIdSelector/${article.article_id}`}><b>Click here to interact with the full article and the comments on the article</b></Link>
            </div>)
        })
}</ul>) : (
    <div>
    <h2>Your topic is invalid.</h2>
    <Link to="/articles"><button>Press here to go home</button></Link>
    </div>
    )}
    </div>) 
}