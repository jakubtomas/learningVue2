import axios from 'axios'


export default (url = 'https://629e64f33dda090f3c191498.mockapi.io/todos') => {
    return axios.create({ baseURL: url })
}