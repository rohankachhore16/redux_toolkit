import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  const items = useSelector(state => state.cart.cartItem)
 
  console.log("product list", items
  )
  return (
    <>
      <div className="cart-container">
        <h2>shoping cart</h2>
        {items.length === 0 ? (
          <div className="cart-empty">
            <p>your cart is currently empty</p>
            <div className="start-shopping">
              <NavLink to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg><span>Start Shoping</span> </NavLink>
            </div>
          </div>
        ) : (<div>
          <div className="titles">
            <h3 className="product-title">product</h3>
            <h3 className="price">price</h3>
            <h3 className='Quentity'>Quentity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {items?.map(product => (
              <div className="cart-item" key={product.id}>
                <div className="cart-product">
                  <img src={product.image} alt="" />
                  <div>
                    <span>{product.title}</span><br />
                    <button>Remove</button>
                  </div>
                </div>
                <div className="cart-product-price">
                    ${product.price}
                </div>
                  {console.log(product,".........")}
                <div className="cart-product-Quantity">
                  <button>-</button>
                  <div className="count">{product.cartQuantity?product.cartQuantity:0}</div>
                  <button>+</button>
                </div>
                <div className="cart-product-total-price">
                  ${product.cartQuantity?product.price*product.cartQuantity:0}
                </div>
              </div>

            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart">Clear-cart</button>
            <div className="cart-checkout">
              <span>SubTotal</span>
              <span className="amount">${items.cartTotalAmount}</span>
            </div>
            <p>taxes and shping calculate and  checkout</p>
            <button>check Out</button>
            <div className="Contiue-shopping">
              <NavLink to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg><span>Continue Shoping</span> </NavLink>
            </div>
          </div>
        </div>)}
      </div>  
        </>
  )
}

export default Cart
