import axios from "axios";
import { linkHttp } from "../constants/common/resource";
export const getListMainMenu = async (headers) => {
        const response = await axios.get(linkHttp.linkMenuAdminSide, headers);
        return response.data;

}