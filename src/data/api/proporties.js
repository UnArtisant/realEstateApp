import {api, PROPERTY_LIST_PATH} from "../../constant/api";

export const fetchProporties = () => {
    return api.get(`${PROPERTY_LIST_PATH}?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6` )
}