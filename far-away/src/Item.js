import { useState } from "react";

export function Item({ item, remooveItem, toggleIsPacked }) {

  return (
    <li className="item">
      <input
			  type="checkbox"
			  value={item.isPacked}
        onChange={(e) => {
			 toggleIsPacked(item.id,e.currentTarget.checked);
        }}
        onClick={() => {
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
