import {api} from "../../constant/api";

export const fetchApi = async (url) => {
    return await api.get(url)
}