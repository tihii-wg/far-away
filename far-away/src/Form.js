export function Form() {
  return (
    <form className="form">
		  <h3>What do you need for you trip? 🚢</h3>
		  <select>
			  <option value={1}>1</option>
			  <option value={2}>2</option>
			  <option value={3}>3</option>
		  </select>
		  <input type="text" placeholder="Item..."/>
    </form>
  );
}
