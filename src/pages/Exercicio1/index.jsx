import { Link} from "react-router-dom";
import { useState } from 'react'
import './style.css'

function Exercicio1 () {
    const [numero, setNumero] = useState("")
    const [numero2, setNumero2] = useState("")
    const [resultado, setResultado] =useState("")
    
    function handleSubmit(e) {
        event.preventDefault();
        console.log(numero, numero2)
        setResultado(1+1)
     }

    return (
        <form onSubmit={handleSubmit}>
        
            <label>Numero</label>
            <input 
            type="number"
            value={numero}
            onChange={ (e) => setNumero (e.target.value)}
        /> 

         <label>Numero</label>
            <input 
            type="number"
            value={numero}
            onChange={ (e) => setNumero (e.target.value)}
        /> 

        <p>{resultado}</p>
        <button type="submite">Cadastrar</button>



        <Link to="/"></Link>
        </form>
        
    )
}

export default Exercicio1

