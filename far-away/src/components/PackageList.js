import { Item } from "../components/Item";
import { DESCRIPTION } from "../constantes/DESCRIPTION";
import { INPUT } from "../constantes/INPUT";
import { PACKED } from "../constantes/PACKED";

export function PackageList({
  items,
  toogleIsPacked,
  remooveItem,
  setSortBy,
  sortBy,
}) {
  const sortByHandler = (e) => {
    setSortBy(e.currentTarget.value);
  };

  return (
    <>
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
      <div className="buttons">
        <button>Clear list.</button>
        <select value={sortBy} onChange={sortByHandler}>
          <option value={INPUT}>Sort by input order.</option>
          <option value={DESCRIPTION}>Sort by description.</option>
          <option value={PACKED}>Sort by packed staus.</option>
        </select>
      </div>
    </>
  );
}
