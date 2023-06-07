import axios from 'axios'
import { baseUrl } from './components/constants/constant'

const instance = axios.create({
    baseURL: baseUrl
  });

  export default instance;