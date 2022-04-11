import axios from "axios";

axios.defaults.baseURL = "https://www.metaweather.com/api/location"

export class API {
    getLocations(keyWord: string) : void {
        if (!keyWord.length) return

        axios({
            method: "get",
            url: `/search/?query=${keyWord}`,
            headers: {
                "Content-type": "text/html",
            },
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}