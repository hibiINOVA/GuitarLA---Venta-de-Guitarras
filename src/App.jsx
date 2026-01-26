import './App.css'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Card from './Componentes/Card'
import { db } from '../src/db/db'
import {useState, useEffect} from 'react'

function App() {

  const [customer, setCustomer] = useState({})
  const [total, setTotal] = useState(0)
  const [products, setProducts] = useState([])
  const [modal, setModal] = useState(false)
  
  console.log(total)

  const [data, setData] = useState(db)

  console.log(data)

  //useEffect(()=>{
  //  setData(db)
  //},[])

  return (
    <div>
      <Header/>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(product => (
          <Card
            key={product.id}
            imagen={product.image}
            nombre={product.name}
            descripcion={product.description}
            precio={product.price}
          />
        ))}

        </div>
      </main>
    <Footer/>
    </div>
  )
}

export default App
