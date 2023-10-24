import { getAllTopics } from "../../api"
import { useState,useEffect } from "react"
import { TopicCard } from "./TopicCard"
export const Topics = () =>{
    const [allTopics,setAllTopics] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() =>{
        getAllTopics().then((topics) =>{
            setAllTopics(() =>{
                return topics
            })
            setIsLoading(false)
        })
        
    },[])
    return (
        <div>
          {!isLoading ? (
            <div>
            <h2>Please see all Topics below</h2>
            <main> <TopicCard allTopics={allTopics}/> </main>
            </div>
          ) : (
            <h2>Loading....</h2>
          )}
        </div>
      ); 
}