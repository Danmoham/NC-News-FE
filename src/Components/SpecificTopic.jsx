import { useParams } from "react-router-dom"
import { getSpecificTopicArticles } from "../../api"
import { useState,useEffect } from "react"
import { SpecificTopicArticleCards } from "./SpecificTopicArticleCards"
export const SpecificTopic = ({setTopic,topic}) =>{
    let {topic_name} = useParams()
    const [topicArticles,setTopicArticles] = useState([])
    const [finalTopicArticles,setFinalTopicArticles] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [loadingMessage,setLoadingMessage] = useState("Loading...")
    useEffect(() =>{
        getSpecificTopicArticles(topic_name).then((displayArticles) =>{
            setTopicArticles(displayArticles)
                setFinalTopicArticles(displayArticles)
                setIsLoading(false)
        })
    },[isLoading,topic])
    return (
        <div>
            {!isLoading ? (
                <div>
                    <h2>Please see articles for {topic_name}</h2>
                    <main>{<SpecificTopicArticleCards finalTopicArticles={finalTopicArticles}/>}</main>
                    </div>
            ): (
                <h2>{loadingMessage}</h2>
            )} 
        </div>
    )
}