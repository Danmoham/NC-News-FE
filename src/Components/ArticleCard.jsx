import { Link } from 'react-router-dom'
export const ArticleCards = ({allArticles}) =>{
    return (<div ><ul id="cards">
        { allArticles.map((article,index) =>{
            const dateFormatter = (created_at) => {return new Date(created_at).toLocaleDateString()}
            return (<div className="each-article" key={article.article_id}>
           <h3><Link id = "myTitle"to={`/articles/ArticleIdSelector/${article.article_id}`}>{`${index+1}. ${article.title}`}</Link> </h3>
            <li><b>Article Id: </b>{article.article_id}</li>
            <li><b>Author: </b>{article.author}</li>
            <li><b>Topic:</b> {article.topic}</li>
            <li><b>Date:</b> {dateFormatter(article.created_at)}</li>
            <img src={article.article_img_url} alt="image of the item article"/>
            <li><b>Votes: </b>{article.votes}</li>
            <li><b>Comment Count:</b> {article.comment_count}</li>
            <Link to={`/articles/ArticleIdSelector/${article.article_id}`}><b>Click here to interact with the full article and the comments on the article</b></Link>
            </div>)
        })} 
    </ul></div>)
}