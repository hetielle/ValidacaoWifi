package com.fhcsl.demo.services;

import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.fhcsl.demo.models.Usuario;
import com.fhcsl.demo.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Service
public class UsuarioService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    public ResponseEntity<?> cadastrar(Usuario usuario){
        
        CPFService cpfService = new CPFService();

        if(cpfService.validarCPF(usuario.getCpf())){

            usuarioRepository.save(usuario);
            return new ResponseEntity<>("Cadastro realizado com sucesso", HttpStatus.CREATED);
            
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CPF inválido");
        }
    }
}
