export function Item({ item, toggleIsPacked, remooveItem }) {
  return (
    <li className="item">
      <input type="checkbox" onChange={toggleIsPacked} />
      <span style={item.isPacked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => {
          remooveItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
