import { useState } from "react";
import { useCounter, useFetch } from "../../hooks";
import { Small } from "./Small";

export const Memorize = () => {
const { data } = useFetch(`https://webportafolio.local/wp-json/acf/v3/options/options`);
const {state, increment} = useCounter(10);
const {show, setShow} = useState(true)

const perfilData = data.acf['b-perfil']
return (
    <>

    <h1
    className="my-4 text-center"
    >
        Counter: <Small value = {state}/> </h1>

    <hr/>

    <button
    className="btn btn-primary mt-2 mr-5"
    onClick={()=>increment()}
    >
        +1
    </button>
    <button
    className="btn btn-outline-secondary mt-2 mx-2"
    onClick={() => setShow(!show)}
    >
        Show/Hide {JSON.stringify(show)}
    </button>
    <div>
    {perfilData['b-perfil__nombre']}
    </div>
    
    </>
  )
}
