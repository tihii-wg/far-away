import "./App.css";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackageList } from "./PackageList";
import { v1 } from "uuid";
import { useState } from "react";

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
        items={items}
        remooveItem={remooveItem}
        toogleIsPacked={toogleIsPacked}
      />
      <Footer
        items={items.length}
        isPackedItemsQuantity={isPackedItemsQuantity.length}
      />
    </div>
  );
}

export default App;
