# VM-Product Card

Este es un paquete de pruebas de despligue en npm.

### Author: Victor Morales

## Ejemplo

```
impoert { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'vm-product-card'
```

```
<ProductCard
    product={product}
    value={2}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ( { reset, increaseBy, count, isMaxCountReached  } ) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```
