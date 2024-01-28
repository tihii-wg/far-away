import { Item } from "./Item";

export function PackageList({ initialItems,toggleIsPacked }) {
  return (
    <ul className="list">
      {initialItems.map((item) => (
        <Item key={item.id} item={item} toggleIsPacked={toggleIsPacked} />
      ))}
    </ul>
  );
}
