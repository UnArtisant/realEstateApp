import axios from "axios";

export const AUTO_COMPLET_PATH = "auto-complete"
export const PROPERTY_LIST_PATH = "properties/list"
export const PRORTIES_DETAIL_PATH = "properties/detail"
export const AGENCIES_LIST_PATH = "agencies/list"

export const api = axios.create({
    baseURL: 'https://bayut.p.rapidapi.com/',
    headers : {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '541ab7cb9emsh3eebeabf0a807c4p1043e9jsn2260ccc4f52f'
    }
})