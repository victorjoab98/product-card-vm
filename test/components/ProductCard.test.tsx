import React from "react"
import rederer from "react-test-renderer"
import ProductCard from "../../src/components"
import { product1 } from "../data/products"

const act = rederer.act;

describe('ProductCard', () => { 
    test('debe mostrarse correctamente', () => {
        const wrapper = rederer.create(
            <ProductCard product={product1}>
                {
                    () => <h1>Product Card</h1>
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    })

    test('debe incrementar el contador', () => {
        const wrapper = rederer.create(
            <ProductCard product={product1}>
                {
                    ({ count, increaseBy }) => 
                        <>
                            <h1>Product Card</h1>
                            <span>{ count }</span>
                            <button onClick={() => increaseBy(1)}>+1</button>
                        </>
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON();
        expect( tree ).toMatchSnapshot();

        expect( wrapper.toJSON() ).toMatchSnapshot();

        act( ()=> {
            ( tree as any).children[2].props.onClick();
        })

        tree = wrapper.toJSON();

        expect((tree as any).children[1].children[0]).toBe('1')
    })
 })