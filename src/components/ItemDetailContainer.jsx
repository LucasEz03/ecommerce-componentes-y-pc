import { useState, useEffect } from 'react'
import { getProductById } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({ productId = '1' }) => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        getProductById(productId)
        .then((data) => setProduct(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    }, [productId])

    if (loading) return <p className="loading">Cargando producto...</p>
    if (error) return <p className="error">{error}</p>

    return <ItemDetail product={product} />
}

export default ItemDetailContainer