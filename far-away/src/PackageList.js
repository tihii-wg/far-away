import { Item } from "./Item";

export function PackageList({ initialItems, toggleIsPacked, remooveItem }) {
  return (
    <ul className="list">
      {initialItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          toggleIsPacked={toggleIsPacked}
          remooveItem={remooveItem}
        />
      ))}
    </ul>
  );
}
