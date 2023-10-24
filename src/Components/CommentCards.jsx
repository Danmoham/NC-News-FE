
export const CommentCards = ({allComments}) =>{
    return (<ul>
        { allComments.map((comment) =>{
            const dateFormatter = (created_at) => {return new Date(created_at).toLocaleDateString()}
            return (<div className="each-comment" key={comment.comment_id}>
            <div id="margin-div">
            <li><b>Comment Id: </b>{comment.comment_id}</li>
            <li><b>Author: </b>{comment.author}</li>
            <li><b>Body: </b> {comment.body} </li>
            <li><b>Article Id:</b> {comment.article_id}</li>
            <li><b>Date when the Comment was created :</b> {dateFormatter(comment.created_at)}</li>
            <li><b>Votes: </b>{comment.votes}</li>
            </div>
            </div>)
        })} 
    </ul>)
}