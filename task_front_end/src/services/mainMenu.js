import axios from "axios";
const httpMainMenu = "http://localhost:8080/admin/main-menus"
export const getListMainMenu = async (headers) => {
        const response = await axios.get(httpMainMenu, headers);
        return response.data;

}