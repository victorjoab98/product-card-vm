import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductTitle } from '../../src/components';
import { product1 } from '../data/products';

describe('ProducTitle', () => {
    test('debe de mostrar el componente con el titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title='Hola mundo'/>
        )
        expect( wrapper.toJSON() ).toMatchSnapshot();
    })

    test('debe mostrar el titulo que viene del componenten padre', () => {

        const wrapper = renderer.create(
            <ProductCard  product={product1}>
                {
                    () => (
                        <ProductTitle/>
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();

    })
})