function Item({ name, category, inCart, putInCart }) {

  return (
    <li className={(inCart ? "in-cart" : "")}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={putInCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
