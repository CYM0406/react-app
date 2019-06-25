import axios from "@/utils/axios"


export const getlist = ({ url }) => {
    return axios.get(url).then(res => {
        console.log(res)
        return {
            type: "getlist",
            list: res.data.data
        }
    })
}