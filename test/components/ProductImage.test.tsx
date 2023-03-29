import React from "react"
import rederer from "react-test-renderer"
import ProductCard, { ProductImage } from "../../src/components"
import { product1 } from "../data/products"



describe('ProductImage', () => { 
    test('debe mostrarse con imagen', () => {
        const wrapper = rederer.create(
            <ProductImage img="http://image.jpg"/>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    })

    test('debe mostrarse con imagen del componente padre', () => {
        const wrapper = rederer.create(
            <ProductCard product={product1}>
                {
                    () => <ProductImage/>
                 }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    })
 })