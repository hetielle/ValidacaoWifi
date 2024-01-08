import { useState } from 'react';
import { useCadastrarUsuario } from '../../hooks/cadastrarUsuario.hook';
import { Link } from 'react-router-dom';


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
        <h1>HOSPITAL CENTENÁRIO</h1>
        <p>Insira seus dados para uma conexão segura e confiável</p>
        
        <form onSubmit={onSubmit}>
          
          <div className="row">
            <div className="column">

              <label htmlFor="cpf">CPF</label>
              <input type="text" name="cpf" placeholder="000.000.000-00" onChange={handleChange}/>

              <input type="checkbox" name="termo" id="termo" className='custom-checkbox'/>
              <label htmlFor='termo' className='custom-checkbox-label'>Eu aceito os <Link to={"/termo"}>Termos de Serviço</Link></label>
              
              <button type='submit'>CADASTRAR</button>
              
            </div>
          </div>

          
        </form>
      
      </div>
    )
  }
   
  export default Main