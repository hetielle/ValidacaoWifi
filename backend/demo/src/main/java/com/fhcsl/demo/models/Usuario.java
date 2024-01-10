package com.fhcsl.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
 
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Usuario{

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id; 

    @NotBlank(message = "Insira seu CPF")
    @Column(nullable = false, length = 14) 
    private String cpf;

    @NotNull(message = "Aceite os termos para se cadastrar")
    @AssertTrue(message = "Aceite os termos para se cadastrar")
    private Boolean cienciaTermo;
}