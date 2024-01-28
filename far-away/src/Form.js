export function Form() {
  return (
    <form className="form">
      <h3>What do you need for you trip? 🚢</h3>
      <select>
        {Array.from({ length: 20 }, (v, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button type="submit">ADD</button>
    </form>
  );
}
