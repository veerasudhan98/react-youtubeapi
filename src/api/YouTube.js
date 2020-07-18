//I AM USING AXIOS 0.18.1(older version - to overcome params bug)
import axios from 'axios'
const KEY = "AIzaSyDqllx_a742K_SoZrx8Aai4ObBTZs3Pb-Q"

//https://www.googleapis.com/youtube/v3/search?part=snippet&q=buildings&type=video&maxResults=5&key=AIzaSyDqllx_a742K_SoZrx8Aai4ObBTZs3Pb-Q

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key:KEY,
    }
})



