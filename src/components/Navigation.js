import React, {useEffect, useRef} from 'react';

const Navigation = ({setCartRef}) => {
    const cartRef = useRef(null);

    useEffect(()=>{
        setCartRef(cartRef)
    },[cartRef]);

    return (

        <div className="fly-to-cart">
            <div className="cart" ref={cartRef}>
                Navigation Bar Cart
            </div>
        </div>
    );
}

export default Navigation;
