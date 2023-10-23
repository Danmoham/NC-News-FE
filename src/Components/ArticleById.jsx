import { useParams } from 'react-router-dom';
import { getSpecifcArticle } from '../../api';
import { useState,useEffect } from 'react';
import { SpecificArticleCard } from './SpecificArticleCard';
export const ArticleById = () =>{
    let {final_id} = useParams()
    const [onlyArticle,setOnlyArticle] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() =>{
        getSpecifcArticle(final_id).then((displayArticles) =>{
            setIsLoading(false)
            setOnlyArticle(displayArticles)
        })
        
    },[])
    return (
        <div>
          {!isLoading ? (
            <div>
            <h2>Please see Specific Article below:</h2>
            <main> {<SpecificArticleCard onlyArticle = {onlyArticle}/>} </main>
            </div>
          ) : (
            <h2>Loading....</h2>
          )}
        </div>
      ); 
}