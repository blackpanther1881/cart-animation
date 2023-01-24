import React, {useState} from "react";
import HomePage from "./pages/homepage";
import Products from "./pages/products";
import Navigation from "./components/Navigation";
import {Route, Routes} from "react-router-dom"
import anime from "animejs";

const App = () => {
    const [cartRef, setCartRef] = useState('')
    const addToCart = async (cartRef, productRef) => {
        console.log(cartRef, productRef, "Ssss");
        try {
            console.log(cartRef, productRef, "Ssss");
            // Get the position of the cart and product
            const cartPosition = cartRef.current.getBoundingClientRect();
            const productPosition = productRef.current.getBoundingClientRect();

            // Create a copy of the product image
            const copy = productRef.current.cloneNode(true);
            copy.style.position = 'absolute';
            copy.style.top = `${productPosition.top}px`;
            copy.style.left = `${productPosition.left}px`;
            document.body.appendChild(copy);

            // Animate the copy flying to the cart
            anime({
                targets: copy,
                duration: 1000,
                easing: 'easeInOutQuad',
                top: cartPosition.top,
                left: cartPosition.left,
                complete: () => {
                    document.body.removeChild(copy);
                }
            });
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <>
            <div className="container-fluid app-nav animate__animated animate__fadeInDown">
                <Navigation setCartRef={setCartRef}/>
            </div>

            <Routes>
                <Route
                    path='/'
                    exact
                    element={
                        <HomePage cartRef={cartRef} addToCart={addToCart}/>
                    }
                />
                <Route
                    path="/products"
                    exact
                    element={
                        <Products cartRef={cartRef} addToCart={addToCart}/>
                    }
                />
            </Routes>
        </>

    );
}

export default App;
