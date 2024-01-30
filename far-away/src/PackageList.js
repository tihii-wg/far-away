import { Item } from "./Item";

export function PackageList({ initialItems, isPackedToogleItem, remooveItem }) {
  return (
    <ul className="list">
      {initialItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          toggleIsPacked={isPackedToogleItem}
          remooveItem={remooveItem}
        />
      ))}
    </ul>
  );
}
