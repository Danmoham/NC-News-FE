import { useParams } from 'react-router-dom';
import { getSpecifcArticle } from '../../api';
import { useState,useEffect } from 'react';
import { SpecificArticleCard } from './SpecificArticleCard';
export const ArticleById = ({setLogin,login,user}) =>{
    let {final_id} = useParams()
    const [commentUpdates,setCommentUpdates] = useState(false)
    const [isSuccess,setIsSuccess] = useState(false)
    const [onlyArticle,setOnlyArticle] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const [id,setId] = useState(0)
    useEffect(() =>{
        getSpecifcArticle(final_id).then((displayArticles) =>{
            setIsLoading(false)
            setId(final_id)
            setOnlyArticle(displayArticles)
        })
        
    },[commentUpdates,isSuccess,login])
    if(login){
    return (
        <div>
          {!isLoading ? (
            <div>
            <main> {<SpecificArticleCard setOnlyArticle={setOnlyArticle} isSuccess={isSuccess} setIsSuccess={setIsSuccess}user={user} login={login} setCommentUpdates={setCommentUpdates} commentUpdates={commentUpdates}id = {id}onlyArticle = {onlyArticle}/>} </main>
            </div>
          ) : (
            <h2>Loading....</h2>
          )}
        </div>
      ); 
          }else{
            return (<div id="LoginArticle"><h2>Please select the Login button to see this article! You can log in by pressing the button below or the one on the top Left!</h2>
          <button onClick={((event) =>{
            event.preventDefault()
        setLogin(true)
     })}>Login</button>
            </div>)

          
          }
}