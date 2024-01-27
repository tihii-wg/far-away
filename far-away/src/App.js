import "./App.css";

const initialList = [
  {
    drscription: "socks",
    isPacked: false,
    quantity: 2,
  },
  {
    drscription: "charger",
    isPacked: false,
    quantity: 1,
  },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackageList list={initialList} />
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

function PackageList({ list }) {
  return (
    <ul className="list">
      {list.map((list) => <Item list={list} />)}
    </ul>
  );
}

function Item({list}) {
  return <li>{list.drscription}</li>;
}



function Footer() {
  return (
    <footer className="footer">
      <p>You have 4 items on your list,and you already packed 0(0%)</p>
    </footer>
  );
}
