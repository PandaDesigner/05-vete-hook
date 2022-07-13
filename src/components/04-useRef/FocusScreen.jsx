import { useRef } from "react"


export const FocusScreen = () => {

    const inputRef = useRef()

    const handelFocus = () =>{
        inputRef.current.select();
    }
return (
    <>
        <h1 className="text-center text-uppercase py-4">
            Focus  Screen
        </h1>

        <hr/>

        <input
        type="text" 
        ref={ inputRef }
        placeholder="Ingrese su Nombre"
        className="form-control"
    />
        <button
        className="btn btn-outline-primary mt-2"
        onClick={handelFocus}
        >
            Set Focus
        </button>
    </>
)
}
