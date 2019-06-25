import axios from "@/utils/axios"


export const getgeci = ({ url }) => {
    return axios.get(url).then(res => {
        console.log(res)
        return {
            type: "getgeci",
            list: res.data,
        }
    })
}