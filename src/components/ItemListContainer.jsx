import { useState, useEffect } from 'react'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, [])

    return (
        <section className="item-list-container">
        <h1>{greeting}</h1>
        {loading ? <p className="loading">Cargando productos...</p> : <ItemList products={products} />}
        </section>
    )
}

export default ItemListContainer