import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'ea02603e7a89418792c20181aa025189'
    }
})