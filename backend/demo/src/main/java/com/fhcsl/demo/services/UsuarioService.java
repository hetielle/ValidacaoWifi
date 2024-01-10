package com.fhcsl.demo.services;

import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.fhcsl.demo.models.Usuario;
import com.fhcsl.demo.models.UsuarioAdapter;
import com.fhcsl.demo.repository.UsuarioAdapterRepository;
import com.fhcsl.demo.security.crypto.Crypto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@Service
public class UsuarioService {
    
    @Autowired
    private UsuarioAdapterRepository usuarioAdapterRepository;

    public ResponseEntity<?> cadastrar(Usuario usuario){
        
        CPFService cpfService = new CPFService();

        if(cpfService.validarCPF(usuario.getCpf()) && usuario.getCienciaTermo()){
            
            UsuarioAdapter usuarioAdapter = new UsuarioAdapter();
            usuarioAdapter.setCpf(Crypto.encryptRSA(usuario.getCpf().toString()));
            usuarioAdapter.setCienciaTermo(usuario.getCienciaTermo());
            usuarioAdapterRepository.save(usuarioAdapter);
            return new ResponseEntity<>("Cadastro realizado com sucesso", HttpStatus.CREATED);
            
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CPF inválido");
        }
    }
}
