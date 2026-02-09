export default function Card({ guitar, cart, setCart }) {
  const { name, image, description, price } = guitar
  const hanbleClick = (item) => {
    const existeEnCarrito = cart.find((guitarra) => guitarra.name === item.name)
    if (existeEnCarrito) {
        const carritoActualizado = cart.map((guitarra) => {
            if (guitarra.name === item.name) {
                return {
                    ...guitarra,
                    quantity: guitarra.quantity + 1
                }
            } else {
                return guitarra
            }
        })
        setCart(carritoActualizado)
    } else {
      setCart([...cart, 
        {
            name: item.name,
            image: item.image,
            price: item.price
        }
    ])

  }
  }

  function addToCart(item) {
    const itemExist = cart.find(p => p.id === item.id)

    if (itemExist) {
        const updatedCart = cart.map(p =>
        p.id === item.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
        setCart(updatedCart)
    } else {
        setCart([
        ...cart,
        {
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: 1
        }
        ])
    }
    }

return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img 
                    className="img-fluid" 
                    src={"/img/" + image + ".jpg"} 
                    alt="imagen guitarra" 
                />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}