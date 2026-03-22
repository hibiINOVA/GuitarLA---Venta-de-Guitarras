import './App.css'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Card from './Componentes/Card'
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchGuitarras = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/guitarras')
        const result = await response.json()
        console.log(result.data)
        setData(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchGuitarras()
  }, [])

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart')
    return storedCart ? JSON.parse(storedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Header cart={cart} setCart={setCart} />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map(guitar => (
            <Card
              key={guitar.id}
              guitar={guitar}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App