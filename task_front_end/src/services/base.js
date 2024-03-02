import axios from "axios";
const getAll=async (http)=>{
    try{
        const response = await axios.get(http);
        return response.data;
        
    } catch (error){

    }
}
const findAll=async (http,queryParam)=>{
    try{
        console.log(queryParam)
        const response = await axios.get(http,queryParam);
        console.log(response)
        return response.data;
        
    } catch (error){

    }
}
const findByID=async(http,id)=>{
    try{
        const response = await axios.get(http+`/?id=${id}`);
        return response.data;
    } catch (error){

    }
}
const update=async(id,data)=>{
    // try {
    //     const response = await axios.put(http+""+id,data)
    //     return response.data
    // } catch (error){

    // }
}
const create=async(data)=>{
    // try{
    //     const response = await axios.post(http,data)
    //     return response.data;
    // }catch (error){

    // }
}
const BaseService = {
    getAll,
    findAll,
    findByID,
    create,
    update,
};
export default BaseService;