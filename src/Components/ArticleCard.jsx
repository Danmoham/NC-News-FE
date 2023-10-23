export const ArticleCards = ({allArticles}) =>{
    return (<ul>
        { allArticles.map((article) =>{
            const dateFormatter = (created_at) => {return new Date(created_at).toLocaleDateString()}
            return (<div className="each-article" key={article.article_id}>
            <li><b>Article Id: </b>{article.article_id}</li>
            <li><b>Author: </b>{article.author}</li>
            <li><b>Title: </b> {article.title} </li>
            <li><b>Topic:</b> {article.topic}</li>
            <li><b>Date when the article was created :</b> {dateFormatter(article.created_at)}</li>
            <img src={article.article_img_url} alt="image of the item article"/>
            <li><b>Votes: </b>{article.votes}</li>
            <li><b>Comment Count:</b> {article.comment_count}</li>
            </div>)
        })} 
    </ul>)
}