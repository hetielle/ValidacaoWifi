package com.fhcsl.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.fhcsl.demo.models.Usuario;

public interface UsuarioRepository extends CrudRepository <Usuario, Integer>{
    
}
