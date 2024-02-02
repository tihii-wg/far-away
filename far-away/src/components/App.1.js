import { Footer } from "./Footer";
import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackageList } from "./PackageList";
import { v1 } from "uuid";
import { useState } from "react";
import { INPUT, DESCRIPTION, PACKED } from "../constantes/INPUT";
import { initialItems } from "./App";

export function App() {
  const [items, setItems] = useState(initialItems);
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === INPUT) sortedItems = items;
  if (sortBy === DESCRIPTION);
  if (sortBy === PACKED);

  const addNewItem = (quantity, description) => {
    if (description) {
      let newItem = {
        id: v1(),
        description,
        quantity,
      };
      setItems([...items, newItem]);
    }
  };

  const remooveItem = (id) => {
    setItems((items) => items.filter((i) => i.id !== id));
  };

  const toogleIsPacked = (id, isPacked) => {
    // let item = items.find((item) => item.id === id);
    // if (item) {
    //   item.isPacked = isPacked;
    //   setItems((items) => [...items]);
    // }
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, isPacked } : item))
    );
  };

  let isPackedItemsQuantity = items.filter((i) => i.isPacked);

  return (
    <div className="app">
      <Logo />
      <Form addNewItem={addNewItem} />
      <PackageList
        items={sortedItems}
        remooveItem={remooveItem}
        toogleIsPacked={toogleIsPacked}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Footer
        items={items.length}
        isPackedItemsQuantity={isPackedItemsQuantity.length}
      />
    </div>
  );
}
