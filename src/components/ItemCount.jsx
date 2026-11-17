import { useState } from 'react'

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increase = () => {
        if (quantity < stock) setQuantity(quantity + 1)
    }

    const decrease = () => {
        if (quantity > 0) setQuantity(quantity - 1)
    }

    return (
        <div className="item-count">
        <div className="item-count-controls">
            <button onClick={decrease} disabled={quantity <= 0}>-</button>
            <span>{quantity}</span>
            <button onClick={increase} disabled={quantity >= stock}>+</button>
        </div>
        <button
            className="item-count-add"
            onClick={() => onAdd(quantity)}
            disabled={quantity === 0 || stock === 0}
        >
            Agregar al carrito
        </button>
        </div>
    )
}

export default ItemCount