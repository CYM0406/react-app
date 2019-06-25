import axios from "@/utils/axios"


export const searchsong = ({ url }) => {
    return axios.get(url).then(res => {
        console.log(res)
        return {
            type: "searchsong",
            list: res.data.data.songs
        }
    })
}