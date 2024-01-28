export function Item({ item,toggleIsPacked }) {
  return (
    <li className="item">
      <input type="checkbox" onChange={toggleIsPacked} />
      <span style={item.isPacked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
