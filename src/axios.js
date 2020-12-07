import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-83ea3/us-central1/api' // here comes url of API here it would be The API (cloud function) URL
})

export default instance
