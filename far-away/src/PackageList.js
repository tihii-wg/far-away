import { Item } from "./Item";

export function PackageList({ items, toogleIsPacked, remooveItem }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          toogleIsPacked={toogleIsPacked}
          remooveItem={remooveItem}
        />
      ))}
    </ul>
  );
}
