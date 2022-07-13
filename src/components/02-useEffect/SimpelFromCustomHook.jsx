import { useEffect, Children } from "react";
import { useForm } from "../../hooks/useForm";
import './effect.css'

export const SimpelFromCustomHook = () => {

    const {fromState, handleInputChanger, name, email, password, onResetForm } = useForm({
        name:'',
        email:'',
        password:''
    })
    //const { name, email, password } = fromState



return (
    <>
    <h1>Formulario con Custom Hook</h1>
    <br/>
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
 <br/>
<input
        type="email"
        name="email"
        className="form-control shadow mt-2"
        placeholder="correo@corro.com"
        autoComplete="off"
        value={email}
        onChange={handleInputChanger}
        />
        <input
        type="password"
        name="password"
        className="form-control shadow mt-2"
        placeholder="Contraseña"
        autoComplete="off"
        value={password}
        onChange={handleInputChanger}
        />
    </div>
    <br/>

        <button onClick={ onResetForm } className="btn btn-primary">Borrar</button>


    </>
)
}
