import { useState } from "react";

export const useForm = ( initForm = {} ) => {

    const [fromState, setFromState] = useState( initForm );


    const handleInputChanger = ({ target }) => {
        const { name , value } = target;

        setFromState({
            ...fromState,
                [name]: value
        });
    }

const onResetForm = () => {
    setFromState( initForm )
}




return {
    ...fromState,
    fromState,
    handleInputChanger,
    onResetForm
}
}
