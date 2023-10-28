import { useParams,Link } from 'react-router-dom';
import { getSpecifcArticle } from '../../api';
import { useState,useEffect } from 'react';
import { SpecificArticleCard } from './SpecificArticleCard';

export const ArticleById = ({setLogin,login,specificUser}) =>{
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
            <main> {<SpecificArticleCard setOnlyArticle={setOnlyArticle} isSuccess={isSuccess} setIsSuccess={setIsSuccess}specificUser={specificUser} login={login} setCommentUpdates={setCommentUpdates} commentUpdates={commentUpdates}id = {id}onlyArticle = {onlyArticle}/>} </main>
            </div>
          ) : (
            <h2>Loading....</h2>
          )}
        </div>
      ); 
          }else{
            return (<div><div id="LoginArticle"><h2>You Are not Logged in, please select the log in button on the top left of the screen and select a user.</h2>
          <img src="https://media.makeameme.org/created/everybody-log-in.jpg"></img>
                      </div>

            </div>
            )

          
          }
}