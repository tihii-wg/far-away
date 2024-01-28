export function Item({ item }) {
  return (
    <li className="item">
      <input type="checkbox" />
      <span style={item.isPacked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.drscription}
      </span>
      <button>❌</button>
    </li>
  );
}
