import { useState,useEffect } from "react"


export const SortBy = ({sorting,setSorting,ordered,setOrdered}) =>{
  const [myCurrentSort,setMyCurrentSort] = useState("created_at")
  const orderingChecker = {
    false : "ascending",
    true : "descending"
  }
    useEffect(() =>{

    },[ordered,sorting])
return (<div>
<div id="sortDiv"><label>You are currently sorting by {sorting}:</label>
<button className="sortButtons" id={`votes${sorting}`}  onClick={(event) =>{
  event.preventDefault()
  setSorting("votes")
}}>Votes</button>
<button className="sortButtons" id={`created_at${sorting}`} onClick={(event) =>{
   event.preventDefault()
   setSorting("created_at")
}}>created_at</button>
<button className="sortButtons" id={`comment_count${sorting}`} onClick={(event) =>{
   event.preventDefault()
   setSorting("comment_count")
}}>comment_count</button>
</div>
<div id="orderDiv">
<label>Currently ordered by {orderingChecker[ordered]} category</label>
<button id={`button${orderingChecker[!ordered]}`}onClick={(event) =>{
  event.preventDefault()
  setOrdered((currentOrder) =>{
    return !currentOrder
  })
}}>click here to order by {orderingChecker[!ordered]} category</button>
</div>
    </div>
    )
}