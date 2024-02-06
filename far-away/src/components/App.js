import "./App.css";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Logo } from "../components/Logo";
import { PackageList } from "../components/PackageList";
import { v1 } from "uuid";
import { useState } from "react";
import { INPUT } from "../constantes/INPUT";
import { DESCRIPTION } from "../constantes/DESCRIPTION";
import { PACKED } from "../constantes/PACKED";

const initialItems = [
  {
    id: v1(),
    description: "Socks",
    isPacked: false,
    quantity: 2,
  },
  {
    id: v1(),
    description: "Charger",
    isPacked: false,
    quantity: 1,
  },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [sortBy, setSortBy] = useState("INPUT");

  const addNewItem = (quantity, description) => {
    if (description) {
      let newItem = {
        id: v1(),
        description,
        isPacked: false,
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

  const claerItemsList = () => {
    let confirmed = window.confirm(
      "Are  you sure you want to delete the entire list?"
    );
    if (confirmed) setItems([]);
  };

  let isPackedItemsQuantity = items.filter((i) => i.isPacked);

  let sortedItems;
  if (sortBy === INPUT) sortedItems = items;
  if (sortBy === DESCRIPTION)
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === PACKED)
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isPacked) - Number(b.isPacked));

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
        claerItemsList={claerItemsList}
      />
      <Footer
        items={items.length}
        isPackedItemsQuantity={isPackedItemsQuantity.length}
      />
    </div>
  );
}

export default App;
