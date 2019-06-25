import axios from "@/utils/axios"


export const getsong = ({ url }) => {
    return axios.get(url).then(res => {
        console.log(res);
        return {
            type: "getsong",
            list: res.data.data
        }
    })
}