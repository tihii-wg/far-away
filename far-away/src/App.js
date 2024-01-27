import "./App.css";

const initialItems = [
  {
    drscription: "Socks",
    isPacked: false,
    quantity: 2,
  },
  {
    drscription: "Charger",
    isPacked: false,
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

function Logo() {
  return <h1 className="logo">⛵ Far Away 🌴</h1>;
}

function Form() {
  return (
    <form className="form">
      <h3>What do you need for you trip? 🚢</h3>
    </form>
  );
}

function PackageList({ initialItems }) {
  return (
    <ul className="list">
      {initialItems.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <span>
        {item.quantity} {item.drscription}
      </span>
      <button>❌</button>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>You have 4 items on your list,and you already packed 0(0%)</p>
    </footer>
  );
}
