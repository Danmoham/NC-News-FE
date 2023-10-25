import { useState,useEffect } from "react"
export const LoggedIn = ({login,setLogin}) =>{
    useState(() =>{

    },[login])
    return (<div>{login ?  ( <div><p id="loggedState" ><b>You are Logged in as : Grumpy19</b></p>
    <button onClick={(() =>{
        setLogin(false)
    })}>Log out</button>
    </div>
    ) : (
     <button onClick={(() =>{
        setLogin(true)
     })}>Login</button>
    )
 }</div>)
}
  