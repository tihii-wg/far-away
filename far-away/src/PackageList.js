import { Item } from "./Item";

export function PackageList({ items, toogleIsPacked, remooveItem }) {
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
        <button >Clear list.</button>
			  <select >
				  <option>Sort by input order.</option>
				  <option>Sort by description.</option>
				  <option>Sort by packed staus.</option>
		  </select>
      </div>
    </>
  );
}
