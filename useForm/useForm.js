import { useState } from "react";

export const useForm = (initialForm = {}) => {
    
    const [formState, setformState] = useState(initialForm);

    const onInputChange = ({ target: { name, value } }) => { //desestructurando el target del event y a su ves desestructurando el name y el value del target
        //const { name, value } = target;
        setformState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => { 
        setformState(initialForm);
    }
    
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
