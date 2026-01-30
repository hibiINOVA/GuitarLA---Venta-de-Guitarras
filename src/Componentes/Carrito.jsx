import React from 'react'

export default function Carrito({ cart = [] }) {
    console.log(cart)
  return (
    <div id="carrito" className="bg-white p-3">

      {cart.length === 0 ? (
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
              <tr key={item.id}>
                <td>
                  <img
                    className="img-fluid"
                    src={`/img/${item.image}.jpg`}
                    alt={item.name}
                    width="60"
                  />
                </td>

                <td>{item.name}</td>

                <td className="fw-bold">
                  ${item.price}
                </td>

                {}
                <td>1</td>
                <td></td>
              <td className="flex align-items-start gap-4">
                <button
                    type="button"
                    className="btn btn-dark"
                >
                    -
                </button>
                    1
                <button
                    type="button"
                    className="btn btn-dark"
                >
                    +
                </button>
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    type="button"
                >
                    X
                </button>
            </td>
        </tr>
            ))}
          </tbody>
        </table>
      )}
    <p className="text-end">Total pagar: <span className="fw-bold">$899</span></p>
    <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>

    </div>
  )
}
