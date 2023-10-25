import { useState,useEffect } from "react"


export const SortBy = ({ordered,setOrdered}) =>{
  const orderingChecker = {
    false : "ascending",
    true : "descending"
  }
    useEffect(() =>{
    
    },[ordered])
return (<div>
<div id="sortDiv"><label>You can sort by Date, comment count or votes: </label> <input id="category" placeholder="Type text here"></input>
<button>Click here to sort by category</button>
</div>
<label>Currently ordered by {orderingChecker[ordered]} category</label>
<button onClick={(event) =>{
  event.preventDefault()
  setOrdered((currentOrder) =>{
    return !currentOrder
  })
}}>click here to order by {orderingChecker[!ordered]} category</button>
    </div>
    )
}