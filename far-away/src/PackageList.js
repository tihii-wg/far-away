import { Item } from "./Item";

export function PackageList({ initialItems }) {
  return (
    <ul className="list">
      {initialItems.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
}
