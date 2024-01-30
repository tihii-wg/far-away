import { useState } from "react";

export function Form({ addNewItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const onChangeInputValue = (e) => {
    setDescription(e.currentTarget.value);
  };

  const onChangeSelectValue = (e) => {
    setQuantity(Number(e.target.value));
  };
  const addNewItemHandler = () => {
    addNewItem(quantity, description);
    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>What do you need for you trip? 🚢</h3>
      <select value={quantity} onChange={onChangeSelectValue}>
        {Array.from({ length: 20 }, (v, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={onChangeInputValue}
      />
      <button onClick={addNewItemHandler}>ADD</button>
    </form>
  );
}
