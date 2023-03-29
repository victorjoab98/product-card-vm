import { useEffect, useRef, useState } from "react"
import { InitialValuesProductCard, onChangeProductArgs, Product } from "../interfaces"

interface Args {
    product: Product,
    onChange?: ( args: onChangeProductArgs ) => void,
    value?: number,
    initialValues?: InitialValuesProductCard
}

export const useProduct = ( { product, onChange, value = 0, initialValues } : Args ) => {

    const [ counter, setCounter ] = useState<number>( initialValues?.count || value )
    const isMounted = useRef( false );
    
    useEffect( () => {
        if( !isMounted.current ) return;
        setCounter( value )
    }, [ value ])    

    const reset = () => {
        setCounter( initialValues?.count || value )
    }

    const increaseBy = ( value: number ) => {
        let newValue = Math.max( counter + value, 0 ) 
        const finalValue = initialValues?.maxCount ? Math.min( newValue, initialValues?.maxCount ) : newValue
        setCounter( finalValue )
        onChange && onChange( { count: newValue, product } )
    }

    return {
        counter,
        increaseBy,
        reset,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter
    }
}