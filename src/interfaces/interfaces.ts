import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
    id: string,
    img?: string,
    title: string,
}

export interface ProductContextProps {
    counter: number,
    product: Product,
    increaseBy: ( value: number ) => void
    maxCount?: number
}

export interface ProductCardHocProps {
        ( Props: ProductCardProps) : JSX.Element;
        Buttons: ( Props : ProductButtonsProps ) => JSX.Element;
        Image: ( Props : ProductImageProps ) => JSX.Element;
        Title: ( Props : ProductTitleProps ) => JSX.Element;
}

export interface onChangeProductArgs{
    product: Product, 
    count: number
}

export interface InitialValuesProductCard {
    count?: number,
    maxCount?: number
}

export interface ProductCardHandlers {
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: Product,
    increaseBy: ( value: number ) => void,
    reset: () => void
}