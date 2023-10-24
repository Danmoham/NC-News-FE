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
        return res.data.myArticle
    }).catch((err) =>{
        console.log(typeof(err.response.status))
        return err
    })
}
export const getCommentsOnArticle=(myId)=>{
    return NcApi.get(`/articles/${myId}/comments`).then((res) =>{
        return res.data.myComments
    })
}
getCommentsOnArticle(3)