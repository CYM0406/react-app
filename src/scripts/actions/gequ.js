import axios from "@/utils/axios"


export const getgequ = ({ url }) => {
    return axios.get(url).then(res => {
        console.log(res)
        return {
            type: "getgequ",
            list: res.data.data.songs,
        }
    })
}