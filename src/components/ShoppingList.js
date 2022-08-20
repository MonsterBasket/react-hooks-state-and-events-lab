import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [allItems, setAllItems] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState(allItems);

  function setFilter(e){
    let sortedItems = [...allItems]
    if(e.target.value !== "All"){
      sortedItems = allItems.filter(item => item.category === e.target.value)
    }
    setSelectedCategory(sortedItems);
  }

  function putInCart(id){
    const updatedItems = [...allItems];
    updatedItems.find(a => a.id === id).inCart = !updatedItems.find(a => a.id === id).inCart;
    setAllItems(updatedItems);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={setFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => <Item key={item.id} name={item.name} category={item.category} inCart={(item.inCart || false)} putInCart={_ => putInCart(item.id)}/>)}
      </ul>
    </div>
  );
}

export default ShoppingList;
