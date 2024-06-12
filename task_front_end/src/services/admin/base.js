import axios from "axios";
import { createHeader } from "../../config/common";
const getAll = async (http) => {
    try {
        const response = await axios.get(http,createHeader());
        return response.data;

    } catch (error) {
        return error;
    }
}
const BaseServiceAdmin = {
    getAll,
};
export default BaseServiceAdmin;