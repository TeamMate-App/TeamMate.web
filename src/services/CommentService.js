import {create} from "./BaseService";
const http = create()

export const getComments = () => {
    return http.get("comments/comment")
}

export const CreateComment = (author, body) => {
    return http.post('comments/comment' ,{author, body}).then((response) => response.data)
}


