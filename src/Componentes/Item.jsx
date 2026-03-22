export default function Item({ item, cart, setCart }) {
  const { id, img, nombre, precio, quantity } = item

  const eliminarItem = id => {
    setCart(cart.filter(p => p.id !== id))
  }

  const disminuirCantidad = () => {
    if (quantity === 1) {
      eliminarItem(id)
    } else {
      setCart(cart.map(p =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p
      ))
    }
  }

  const aumentarCantidad = () => {
    setCart(cart.map(p =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    ))
  }

  return (
    <tr>
      <td>
        <img
          className="img-fluid"
          src={`/img/${img}.jpg`}
          alt={nombre}
          style={{ width: '50px' }}
        />
      </td>
      <td>{nombre}</td>
      <td className="fw-bold">${precio}</td>
      <td className="d-flex align-items-center gap-2">
        <button className="btn btn-dark" onClick={disminuirCantidad}>-</button>
        <span className="fw-bold">{quantity}</span>
        <button className="btn btn-dark" onClick={aumentarCantidad}>+</button>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => eliminarItem(id)}
        >X</button>
      </td>
    </tr>
  )
}