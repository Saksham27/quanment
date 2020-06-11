import axios from 'axios'

export default class AxiosService {
    
    post(url,data){
        return axios.post(url,data);
    }

    
}

