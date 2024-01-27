export function Item({ item }) {
  return (
    <li className="item">
      <span>
        {item.quantity} {item.drscription}
      </span>
      <button>❌</button>
    </li>
  );
}
