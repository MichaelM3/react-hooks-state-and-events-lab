import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)
  const displayInCart = inCart ? "in-cart" : ""

  function handleClick() {
    setInCart(!inCart)
  }

  return (
    <li className={displayInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
