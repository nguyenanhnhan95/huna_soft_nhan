import { constLogin } from "../constants/login"


export const createHeader = () => {
    return {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(constLogin.ACCESS_TOKEN)
        }
    }
}