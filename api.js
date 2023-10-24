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
        return response.data
    }).catch((err) =>{
        return err.response.status
    })
}
export const postComments = (id,input) =>{
    return NcApi.post(`/articles/${id}/comments`,{username : "grumpy19", body : input}).then((response) =>{
        return response
    }).catch((err) =>{
        return err.response
    })
}


//postComments(1,"this is my comment")