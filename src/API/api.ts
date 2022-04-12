import axios, {AxiosPromise} from "axios";

axios.defaults.baseURL = "https://www.metaweather.com/api/location"

export class API {
    getLocations(keyWord: string) {
        return axios({
            method: "get",
            url: `/search/?query=${keyWord}`
        })
    }
}