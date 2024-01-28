import "./App.css";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackageList } from "./PackageList";

const initialItems = [
  {
    drscription: "Socks",
    isPacked: false,
    quantity: 2,
  },
  {
    drscription: "Charger",
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
