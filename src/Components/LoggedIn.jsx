import { useState,useEffect } from "react"
import { getAllArticles } from "../../api"
export const LoggedIn = ({specificUser,setSpecificUser,login,setLogin}) =>{
    const [myUsers,setMyUsers] = useState([])
    const [logClick, setLogClick] = useState(false)
    function CheckLogin(event){
        event.preventDefault()
        getAllArticles().then((arry) =>{
            const myNewUsers = []
            for (let i = 0; i < arry.length;i++){
                if ((myNewUsers.indexOf(arry[i].author)) === -1){
                    myNewUsers.push(arry[i].author)
                }
            }
            setMyUsers(myNewUsers)
        }).then(() =>{
            setLogClick(true)
        })
    }
    useState(() =>{

    },[login,myUsers,logClick])
   if (login && specificUser.length !== 0 && specificUser !== "select") {
   return (<div><p id="loggedState" ><b>You are Logged in as : {specificUser}</b></p>
    <button onClick={(() =>{
        setLogin(false)
        setLogClick(false)
        setSpecificUser("")
    })}>Log out</button>
    </div>)
}else if (logClick){
 return <div><label>Select your user:</label> 
 <select onChange={((event) =>{
    event.preventDefault()
    setSpecificUser(event.target.value)
    setLogin(true)
 })}>
    <option key="select">select</option>
 {myUsers.map((user) =>{
        return <option key={user}>{user}</option>
    })}
    </select>
    </div>
}else{
        return (<div className="loginDiv">
     <button id="loginButton" onClick={CheckLogin}>Login</button>
     </div>
    )
}
 }

  