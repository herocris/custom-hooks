import { useEffect, useState } from "react"

const localCache = {//para el cache

}
export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    })

    useEffect(() => {
        getFetch();
    }, [url]);

    const setLoadingState = () => {
        setState({
            ...state, //una manera mas eficiente de setear el isLoading
            isLoading: true,
        })
    }

    const getFetch = async () => {
        if (localCache[url]) {
            console.log('Usando cache');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            });
            return;
        }
        setLoadingState();
        await new Promise(resolve => setTimeout(resolve,500));
        const resp = await fetch(url);
        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                },
            });
            return;
        }
        const data = await resp.json();
        setState({
            ...state,
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        })
        console.log(data);
        
        //manejo del cache
        localCache [url] = data;
        console.log(localCache);
        

    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
