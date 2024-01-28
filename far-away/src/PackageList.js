import { Item } from "./Item";

export function PackageList({ initialItems }) {
  return (
    <ul className="list">
      {initialItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}
