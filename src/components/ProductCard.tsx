import  React,{ createContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks'
import { InitialValuesProductCard, onChangeProductArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product,
  // children?: ReactElement | ReactElement[],
  children: ( args: ProductCardHandlers ) => JSX.Element,
  className?: string,
  style?: React.CSSProperties,
  onChange?: ( args: onChangeProductArgs ) => void,
  value?: number,
  initialValues?: InitialValuesProductCard
}

export const ProductCard = ( { product, children, className, style, onChange, value, initialValues } : Props ) => {

  const { counter, increaseBy, reset, maxCount, isMaxCountReached } = useProduct({ product, onChange, value, initialValues })

  return (
    <Provider value={{
        product,
        counter,
        increaseBy,
        maxCount
    }}> 
        <div className={ `${ styles.productCard } ${ className }` } style={style}>
            { children({
                count: counter,
                isMaxCountReached,
                maxCount,
                product,
                increaseBy,
                reset
            }) }
        </div>
    </Provider>
  )
}
