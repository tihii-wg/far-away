import "./App.css";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackageList } from "./PackageList";
import { v1 } from "uuid";

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
    isPacked: true,
    quantity: 1,
  },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackageList initialItems={initialItems} />
      <Footer />
    </div>
  );
}

export default App;
