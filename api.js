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

export const getAllTopics = () =>{
    return NcApi.get(`/topics`,).then((data) =>{
       return data.data.myTopics
    })
}

export const getSpecificTopicArticles = (topic_name) =>{
    return NcApi.get(`/articles?topic=${topic_name}`).then((res) =>{
        return res.data.articles
    })
    .catch((res) =>{
        return res
    })
}
//getSpecificTopicArticles("bbb")

export const getAllArticlesOrdered =(sorted,order) =>{
    const myOrderedObject = {
        false: "asc",
        true : "desc"
    }

    return NcApi.get(`/articles`,{params : { sort_by : sorted, order : myOrderedObject[order]}}).then((res) =>{
        return res.data.articles
    }).catch((err) =>{
        console.log(err)
        return err
    })

}

export const deleteComment = (id) =>{
    return NcApi.delete(`/comments/${id}`).then((res) =>{
    return res.status
    }).catch((err) =>{
        return (err.response.status)
    })
}
export const getBestArticles = () =>{
    return NcApi.get(`/articles?sort_by=votes&&order=desc`).then((res) =>{
        const MyArray = []
        for (let i = 0; i < 10;i++){
            MyArray.push(res.data.articles[i])
        }
        console.log(MyArray)
        return MyArray
    }) 
    .catch((err) =>{
        return err.response
    })  
}
