import axios from 'axios'

const http = axios.create({
    baseURL:'https://teammate.com' //url a la que hacer las peticiones
})

//realizar las peticiones

//export const blablabla = ()=> {
// return http.get o post o put etc ('/direccion de la petición')
//}