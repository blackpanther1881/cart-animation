import React, {useRef} from 'react';

const Products = ({cartRef, addToCart}) => {
    const product1Ref = useRef(null);
    const product2Ref = useRef(null);
    const product3Ref = useRef(null);
    return (
        <div>
            <div>
                <button className="add-to-cart" onClick={()=> addToCart(cartRef, product1Ref)}>
                                   Add to Cart
                </button>
                 <img src="http://fakeimg.pl/200x200/?text=World&font=lobster" className="product-image" alt="product" ref={product1Ref} />
            </div>
            <div>
                <button className="add-to-cart" onClick={()=> addToCart(cartRef, product2Ref)}>
                    Add to Cart
                </button>
                <img src="http://fakeimg.pl/200x200/?text=World&font=lobster" className="product-image" alt="product" ref={product2Ref} />
            </div>
            <div>
                <button className="add-to-cart" onClick={()=> addToCart(cartRef, product3Ref)}>
                    Add to Cart
                </button>
                <img src="http://fakeimg.pl/200x200/?text=World&font=lobster" className="product-image" alt="product" ref={product3Ref} />
            </div>
        </div>
    );
}

export default Products;
