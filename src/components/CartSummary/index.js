import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <>
          <div className="summary-container">
            <h1 className="total-value">
              <span className="order-label">Order Total:</span>
              Rs {total}/-
            </h1>
            <p className="total-item">{cartList.length} Items in cart</p>
            <button type="button" className="check-btn d-sm-none">
              Checkout
            </button>
          </div>
          <button type="button" className="check-btn d-lg-none">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
