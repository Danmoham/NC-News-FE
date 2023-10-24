import axios from "axios";
const NcApi = axios.create({
    baseURL : "https://nc-news-l8gq.onrender.com/api"
})

export const getAllArticles = () =>{
    return NcApi.get("/articles").then((res) =>{
        return res.data.articles

    })
}
export const getSpecifcArticle=(myId)=>{
    return NcApi.get(`/articles/${myId}`).then((res) =>{
        console.log(res.data.myArticle)
        return res.data.myArticle
    }).catch((err) =>{
        return err
    })
}
export const getCommentsOnArticle=(myId)=>{
    return NcApi.get(`/articles/${myId}/comments`).then((res) =>{
        return res.data.myComments
    })
}
export const patchVotesOnArticle=(id,num)=>{
    return NcApi.patch(`/articles/${id}`, {inc_votes : num}).then((response) =>{
        return response
    })
}

