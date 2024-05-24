import axios from "axios";
const httpMainMenu = "http://localhost:8080/admin/main-menus"
export const getListMainMenu = async (headers) => {
    try {
        const response = await axios.get(httpMainMenu, headers);
        return response.data;

    } catch (error) {
        console.log(error)
        return error.response;
    }
}