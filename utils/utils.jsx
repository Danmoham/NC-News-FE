export const mappingArticles = (array) =>{
    return (<ul>
        { array.map((article) =>{
            return (<div className="each-article" key={article.article_id}>
            <li><b>Article Id: </b>{article.article_id}</li>
            <li><b>Author: </b>{article.author}</li>
            <li><b>Title: </b> {article.title} </li>
            <li><b>Topic:</b> {article.topic}</li>
            <li><b>Time when the article was created :</b> {article.created_at}</li>
            <img src={article.article_img_url} alt="image of the item article"/>
            <li><b>Votes: </b>{article.votes}</li>
            <li><b>Comment Count:</b> {article.comment_count}</li>
            </div>)
        })} 
    </ul>)
}