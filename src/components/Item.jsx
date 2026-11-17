const Item = ({ product }) => {
    const { name, price, img, category, stock } = product

    return (
        <article className="item-card">
        <img src={img} alt={name} className="item-img" />
        <h3 className="item-name">{name}</h3>
        <p className="item-category">{category}</p>
        <p className="item-price">${price.toLocaleString('es-AR')}</p>
        <p className="item-stock">Stock: {stock}</p>
        </article>
    )
}

export default Item