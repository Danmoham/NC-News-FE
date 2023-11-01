import { postNewArticle } from "../../api"
import { useState,useEffect } from "react"
import { getAllTopics } from "../../api"
import { Link } from "react-router-dom"
export const CreateArticle = ({login,specificUser}) =>{
    //will need an article name in a form
    const [allTopics,setAllTopics] = useState([])
    const [myTitle,setMyTitle] = useState("")
    const [myTopic,setMyTopic] = useState("")
    const [myBody,setMyBody] = useState("")
    const [myImage,setMyImage] = useState("")
    const [errorState, setErrorState] = useState("")
    const [finalObject,setFinalObject] = useState({})
    const [completeState,setCompleteState] = useState("")
    const [finalMessage,setFinalMessage] = useState("")
    const imageUrlChecker = /(https?:\/\/.*\.(?:png|jpeg|jpg))/i
    const [newArticleId,setNewArticleId] = useState() 
    useEffect(() =>{
        getAllTopics().then((res) =>{
            setAllTopics(res)
        })
        if (Object.keys(finalObject).length > 1){
            postNewArticle(finalObject).then((res) =>{
                setCompleteState("")
                setNewArticleId(res.data.my_article.article_id)
               setFinalMessage(`Your Article has been registered as number ${res.data.my_article.article_id}, click here to view the article`)
            })
            .catch((err) =>{
                console.log(err)
                setCompleteState("")
                setErrorState("This has not been posted due to there being an error!")
            })
        }
    },[finalObject])
    
    function checkingDetailsForAll(event) {
        event.preventDefault()
        if (myBody.length < 50){
            setErrorState("The body isn't long enough! This needs to be at least 50 characters!!")
        }else if (!imageUrlChecker.test(myImage)){
            setErrorState("The url for the image is not valid, please try again with a different url and ensure this is in a jpg or png format.")
        }else if (!myTopic || !myTitle.length){
            setErrorState("please ensure all options are selected or filled!")
        }else{
            setFinalObject(() =>{
                return ({
                    author : specificUser,
                    topic : myTopic,
                    body : myBody,
                    article_img_url : myImage,
                    title : myTitle
                })
            })
            setCompleteState("Article awaiting approval, please wait......")
            setMyImage("")
            setMyBody("")
            setMyTitle("")
            setMyImage("")
        }
    }

    if (login){
    return (<div id="newArticles"><h2>Enter New Article Details</h2>
        <Link to={`/articles/${newArticleId}`}><p className="nonErrorCreate">{finalMessage}</p></Link>
    <form id="createForm" onSubmit={checkingDetailsForAll}> 
    <div className="inputArticle"> 
    <label htmlFor="myName">Title: </label> <textarea value={myTitle} type="text" id="myName" placeholder="Enter Title Here" onChange={(event) =>{
        setMyTitle(event.target.value)
        setErrorState("")
    }}/> 
    </div>
    <div className="inputArticle">
    <label>Topic: </label>
<select onChange={((event) =>{
        event.preventDefault()
        if (event.target.value !== "All Topics"){
        setMyTopic(event.target.value)
        setErrorState("")
        }
})}>
    <option>All Topics</option>
        {allTopics.map((topic) =>{
            return <option to="/articles" key={topic.slug} value={topic.slug}>{topic.slug}</option>
        })}
        </select>
        </div>
    <div className="inputArticle">
    <label htmlFor="body">Enter your body here:</label>
    <textarea onChange={(event) =>{
        setMyBody(event.target.value)
        setErrorState("")
    }}id="myBody"value={myBody} placeholder="Please ensure this exceeds 50 characters"></textarea>
    </div>
    <div className="inputArticle">
    <label htmlFor="url">Image Url: </label>
    <textarea value={myImage} onChange={(event) =>{
        setMyImage(event.target.value)
        setErrorState("")
    }} placeholder="Enter URL here"></textarea>
    </div>
    <div>
    <button id="createButton"className="navBut">Submit here</button>
    </div>
    </form>
    <p className="errorCreate">{errorState}</p>
    <p className="nonErrorCreate">{completeState}</p>
    </div>)
}else{
    return (<div><div id="LoginArticle"><h2>You Are not Logged in, please select the log in button on the top left of the screen and select a user.</h2>
    <img src="https://media.makeameme.org/created/everybody-log-in.jpg"></img>
                </div>

      </div>
      )
}
}