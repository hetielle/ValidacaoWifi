package com.fhcsl.demo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.caelum.stella.ValidationMessage;
import br.com.caelum.stella.validation.CPFValidator;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Service
public class CPFService {
    
    public boolean validarCPF(String cpf){
		
		CPFValidator cpfValidator = new CPFValidator(); 

		List<ValidationMessage> erros = cpfValidator.invalidMessagesFor(cpf); 

		if(erros.size() > 0){ 
			return false; 
		}else { 
			return true; 
		} 
	}    
}
