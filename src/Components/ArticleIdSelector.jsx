import { useEffect,useState } from "react"
import {useNavigate} from "react-router-dom"
import { getSpecifcArticle } from "../../api"
import { ArticleById } from "./ArticleById"
export const ArticleIdSelector = () =>{
    const [finalId,setFinalId] = useState(0)
    const [currentID,setCurrentId] = useState(0)
    const [press,setPress] = useState(false)
    const navigate = useNavigate()
    function submitHandler(event){
        event.preventDefault()
        const myPress = setPress(true)
        const myId = setFinalId(currentID)
        Promise.all([myId,myPress])
        if (press){
        setFinalId(() =>{
            return currentID
        })}

    }
    useEffect(() =>{
        if(press){
            navigate(`${finalId}`)
        }
    
    },[finalId])
    
    return (
    <div>
    <h2>Select the Article you want in the field below</h2>
    <div id="formDiv">
    <form onSubmit={submitHandler}>
    <label>Type the ID for your article here: </label>
    <input type="text" value={currentID} placeholder="article id" onChange={(event) =>{
        const value = event.target.value
        setCurrentId(Number(value))
    }}></input>
    <button>Go to Article!</button>
    </form>
    </div>
    </div>
    )
}