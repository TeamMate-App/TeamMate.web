import {create} from "./BaseService";
const http = create()

export const getComment = () => {
    return http.get('comments/comment')
}

export const CreateComment = () => {
    return http.post('comments/comment')
}