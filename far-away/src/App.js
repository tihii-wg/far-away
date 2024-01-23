import "./App.css";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackageList />
      <Footer />
    </div>
  );
}

export default App;

function Logo() {
  return <h1>⛵ Far Away 🌴</h1>;
}

function Form() {
	return <div>
	  <h3>What do you need for you trip? 🚢</h3>
  </div>;
}

function PackageList() {
  return <div className="list">list</div>;
}

function Footer() {
  return (
    <footer className="footer">
      <p>You have 4 items on your list,and you already packed 0(0%)</p>
    </footer>
  );
}
