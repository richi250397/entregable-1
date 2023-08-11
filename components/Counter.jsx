
import { useState } from "react"

// UseState genera el estado NO es el estado //

const Counter = () => {


   // const [ state, setState ] = useState("valor inicial")

    //const nameArray = ["Andres", "Steven", "Mario"]
    //console.log(nameArray[1])

       /*
    const primero = namesArray[0]
    const segundo = namesArray[1]
    const tercero = namesArray[2]
    */
   
    //Desestructuracion / Destructuring
    //Arreglos se asignan valores de forma posicional
    //const [ primero, segundo, tercero ] = namesArray
    //console.log( primero, segundo, tercero )

    const [ counter, setCounter ] = useState(0)
    console.log(counter)

    const incrementCounter = () => {
        setCounter( counter + 1 ) 
    
    }

    const decrementoCounter = () => {
        if ( counter > 0 ) {
            setCounter( counter - 1 )
        } 
    }

    return (
        <div>
            <h2> Valor Actual: { counter } </h2>
            <button onClick={decrementoCounter}>Decremento</button>
            <button onClick={incrementCounter}> Incrementar </button>
        </div>
    )

}

export default Counter