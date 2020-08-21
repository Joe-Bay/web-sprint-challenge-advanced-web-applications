import axios from 'axios'

const fetchBubbles = () => {
    return axios.get('http://localhost:5000/api/colors')
    .then(res => {
        console.log(res)
        return res
    })
}
export default fetchBubbles