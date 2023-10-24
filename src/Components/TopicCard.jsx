import { Link } from "react-router-dom"
export const TopicCard = ({allTopics}) =>{
    return <ul>
        {allTopics.map((topic) =>{
            return (<div className="topicCard">
                <h4>Topic Name : {topic.slug}</h4>
                <h4>Topic Description : {topic.description}</h4>
                <Link><h4>Click here for all {topic.slug} articles</h4></Link>
            </div>)
        })}
    </ul>
}