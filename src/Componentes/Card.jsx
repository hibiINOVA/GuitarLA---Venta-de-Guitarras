export default function Card({ guitar, cart, setCart }) {
  const { nombre, img, descripcion, precio } = guitar

  function addToCart(item) {
    const itemExist = cart.find(p => p.id === item.id)
    if (itemExist) {
      const updatedCart = cart.map(p =>
        p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
      )
      setCart(updatedCart)
    } else {
      setCart([...cart, {
        id: item.id,
        nombre: item.nombre,
        img: item.img,
        precio: item.precio,
        quantity: 1
      }])
    }
  }

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={"/img/" + img + ".jpg"}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{nombre}</h3>
        <p>{descripcion}</p>
        <p className="fw-black text-primary fs-3">${precio}</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => addToCart(guitar)}
        >Agregar al Carrito</button>
      </div>
    </div>
  )
}