import axios from 'axios'

export default class AxiosService {
    
    post(url,data){
        return axios.post(url,data);
    }

    getAll(url){
        return axios.get(url);
    }

    deleteMultiple(url,data){
        return axios.delete(url,{data});
    }
}

