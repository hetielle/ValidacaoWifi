import { Link } from 'react-router-dom';

const Error404Component = () => {

  return (

    <div className='container-error'>
        <article className='titulo-error'>
            <h1>404</h1>
        </article>
        <h5 className='sub-error'>A página que você está procurando não foi encontrada</h5>
        <button className='botao btn'><Link to={"/"}>Voltar</Link></button>
    </div> 

  )
}

export default Error404Component