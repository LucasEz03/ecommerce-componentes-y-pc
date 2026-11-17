import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenidos a TechStore! Encontrá los mejores componentes para tu PC" />
      <ItemDetailContainer productId="1" />
    </>
  )
}

export default App