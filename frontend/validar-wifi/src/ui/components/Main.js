import { useState } from 'react';
import { useCadastrarUsuario } from '../../hooks/cadastrarUsuario.hook';

const Main = () => {

  const [formInput, setFormInput] = useState({
    cpf: ''
  })

  function handleChange(event){
      const { name, value } = event.target;

      setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
  }

  const {cadastrarUsuario} = useCadastrarUsuario();

  async function onSubmit(event){
      event.preventDefault();

      await cadastrarUsuario(formInput.cpf);
  }

    return (
      <div className="container">
        <h1>INSIRA SEUS DADOS PARA ACESSAR O WIFI</h1>
        <p>Seus dados serão utilizados de uma maneira segura</p>
        
        <form onSubmit={onSubmit}>
          
          <div className="row">
            <div className="column">

              <label htmlFor="cpf">CPF</label>
              <input type="text" name="cpf" placeholder="000.000.000-00" onChange={handleChange}/>

              <button type='submit'>CADASTRAR</button>
              
            </div>
          </div>

        </form>
      
      </div>
    )
  }
   
  export default Main