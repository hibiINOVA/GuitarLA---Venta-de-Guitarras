import React from 'react'
import Item from './Item.jsx'
export default function Carrito({ cart = [], setCart }) {
    const isEmpty = () => cart.length === 0
    const cardTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0)
  return (
    <div id="carrito" className="bg-white p-3">

      {isEmpty() ? (
        <p className="text-center">El carrito está vacío</p>
      ) : (
        <table className="w-100 table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cart.map(item => (
              <Item
                key={item.id}
                item={item}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </tbody>
        </table>
      )}
    <p className="text-end">Total pagar: <span className="fw-bold">${cardTotal()}</span></p>
    <button
      className="btn btn-dark w-100 mt-3 p-2"
      onClick={() => {
        setCart([])
        localStorage.removeItem('cart')
      }}
    >
      Vaciar Carrito
    </button>
    </div>
  )
}
