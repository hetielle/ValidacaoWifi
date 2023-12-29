import { useState } from "react";
import { criarUsuarioApi } from "../constants";
import { toast } from "react-toastify";

export function useCadastrarUsuario(){

    const [error] = useState();

    async function cadastrarUsuario(cpf){

        try{
            await criarUsuarioApi(cpf);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {cadastrarUsuario, error};

}