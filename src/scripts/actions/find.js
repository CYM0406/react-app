import axios from "@/utils/axios"


export const getfind = ({ url }) => {
    return axios.get(url).then(res => {
        console.log(res)
        return {
            type: "getfind",
            list: res.data.data
        }
    })
}