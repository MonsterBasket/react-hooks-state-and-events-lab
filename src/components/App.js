import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [dark, setDark] = useState(false);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  function toggleDark(){
    setDark(!dark);
  }

  return (
    <div className={"App " + (dark ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDark}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
