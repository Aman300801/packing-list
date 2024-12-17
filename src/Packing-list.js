import { useState } from "react";
import Item from "./item";


export default function PackingList({
  itemList,
  onRemoveItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItem;

  if (sortBy === "input") sortedItem = itemList;
  else if (sortBy === "description")
    sortedItem = itemList.slice().sort((a, b) => a.description - b.description);
  else if (sortBy === "packed")
    sortedItem = itemList
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  return (
    <>
      <div className="list">
        <ul>
          {sortedItem.map((item) => (
            <Item
              item={item}
              key={item.id}
              onRemoveItem={onRemoveItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={onClearList}>Clear List</button>
        </div>
      </div>
    </>
  );
}
