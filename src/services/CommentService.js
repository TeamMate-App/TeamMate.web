import {create} from "./BaseService";
const http = create()

export const getComments = () => {
    return http.get("comments/comment")
}

export const CreateComment = (author, body, Gameid) => {
    return http.post('comments/comment' ,{author, body, game:Gameid}).then((response) => response.data)
}


