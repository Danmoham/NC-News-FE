import { useEffect,useState } from "react"
import {useNavigate} from "react-router-dom"
import { getSpecifcArticle } from "../../api"
import { ArticleById } from "./ArticleById"
export const ArticleIdSelector = () =>{
    const [finalId,setFinalId] = useState(0)
    const [currentID,setCurrentId] = useState(null)
    const [press,setPress] = useState(false)
    const [errorMessage,setErrorMessage] = useState("")
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
    <label><b>Type the ID for your article here: </b></label>
    <input type="text" value={currentID} placeholder="Number goes here" onChange={(event) =>{
        const value = Number(event.target.value)
        if (isNaN(value)){
            setErrorMessage("This is not a Number Please enter a Number!")
        }else{
            setErrorMessage("")
        setCurrentId(value)
        }
    }}></input>
    <button>Go to Article!</button>
    <p id="selectorError">{errorMessage}</p>
    </form>
    </div>
    </div>
    )
}