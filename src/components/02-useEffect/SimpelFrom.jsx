import { useState, useEffect, Children } from "react";
import './effect.css'
import { Mensaje } from "./Mensaje";

export const SimpelFrom = () => {

    const [fromState, setFromState] = useState({
        name:'',
        email:''
    });

    const { name, email } = fromState;


    useEffect(() => {

        // console.log('Hola Pedro fernandez')

    }, []);

    useEffect(() => {

        // console.log('Pedro esto es desde el formulario')

    }, [fromState]);

    useEffect(() => {

        // console.log('Pedro esto es desde el email')

    }, [email]);



    const handleInputChanger = ({ target }) => {
        const { name , value } = target;

        setFromState({
            ...fromState,
                [name]: value
        });
    }
    


return (
    <>
    <div className="form-group ">
        <input
        type="text"
        name="name"
        className="form-control shadow"
        placeholder="Tu Nombre"
        autoComplete="off"
        value={name}
        onChange={handleInputChanger}
        />
 <hr/>
<input
        type="email"
        name="email"
        className="form-control shadow mt-2"
        placeholder="correo@corro.com"
        autoComplete="off"
        value={email}
        onChange={handleInputChanger}
        />
    </div>
    <hr/>
    { (name !== '' && email !== '')&& <Mensaje className='fs-2'>
    <p>El Nombre <span className="badge text-bg-primary me-2">{name}</span></p>
    <p>El Correo <span className="badge text-bg-primary me-2">{email}</span></p>
    </Mensaje> }

    </>
)
}
