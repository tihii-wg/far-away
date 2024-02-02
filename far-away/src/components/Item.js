export function Item({ item, remooveItem, toogleIsPacked }) {
  const toogleIsPackedHandler = (id, isPacked) => {
	toogleIsPacked(id, isPacked);
  };
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.isPacked}
        onChange={(e) => {
          toogleIsPackedHandler(item.id, e.currentTarget.checked);
        }}
      />
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
