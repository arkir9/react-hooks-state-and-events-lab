import React from "react";
import { useState } from "react";
function Item({ name, category }) {
const [list, setList] = useState('')
  const handleClick = () =>{
    setList('in-cart')
  }
  return (
    <li className={list}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
