import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function criarUsuarioApi(cpf){

    try{
        const response = await axiosInstance.post("/usuarios", {
            cpf
        });

        toast.success(response.data)
        console.log(response)
        return response.data;
        
    } catch(error){
        toast.error(error.response.data.message);
        console.log(error)
        throw new Error(error)

    }
}