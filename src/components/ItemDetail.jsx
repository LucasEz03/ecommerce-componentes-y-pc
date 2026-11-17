import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {
    const { name, price, category, img, stock, description, warranty, specs } = product

    const handleAdd = (quantity) => {
        console.log(`Agregaste ${quantity} unidad(es) de ${name}`)
    }

    return (
        <article className="item-detail">
        <img src={img} alt={name} className="item-detail-img" />

        <div className="item-detail-info">
            <p className="item-detail-category">{category}</p>
            <h2 className="item-detail-name">{name}</h2>
            <p className="item-detail-price">${price.toLocaleString('es-AR')}</p>
            <p className="item-detail-description">{description}</p>

            {specs && (
            <ul className="item-detail-specs">
                {specs.map((spec) => (
                <li key={spec}>{spec}</li>
                ))}
            </ul>
            )}

            {warranty && <p className="item-detail-warranty">🛡️ {warranty}</p>}
            <p className="item-detail-stock">Stock disponible: {stock}</p>

            <ItemCount stock={stock} onAdd={handleAdd} />
        </div>
        </article>
    )
}

export default ItemDetail