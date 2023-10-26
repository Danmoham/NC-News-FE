import { Link } from "react-router-dom"
export const ErrorPage = () =>{
    return (<div id="errorPage">
        <img id="errorImage" src="https://miro.medium.com/v2/resize:fit:800/1*hFwwQAW45673VGKrMPE2qQ.png"/>
        <h1>The link you have typed in is not a valid URL</h1>
                <h2>Please click the button below to be redirected to the home page.</h2>
                <Link to="/articles"><button id="invalidUrlButton">Click Here!</button></Link>
    </div>
    )
}