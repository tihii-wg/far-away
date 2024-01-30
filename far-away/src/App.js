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
    isPacked: true,
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
    setItems(items.filter((i) => i.id !== id));
  };

  const toggleIsPacked = (id) => {
    let item = initialItems.filter((i) => i.id === id);
    setItems([...items, (item.isPacked = !item.isPacked)]);
  };

  let isPackedItemsQuantity = items.filter((i) => i.isPacked);

  return (
    <div className="app">
      <Logo />
      <Form addNewItem={addNewItem} />
      <PackageList
        initialItems={items}
        toggleIsPacked={toggleIsPacked}
        remooveItem={remooveItem}
      />
      <Footer
        items={items.length}
        isPackedItemsQuantity={isPackedItemsQuantity.length}
      />
    </div>
  );
}

export default App;
