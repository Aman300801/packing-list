export default function Item({ item, onRemoveItem, onToggleItem }) {
  return (
    <>
      <li style={item.packed ? { textDecoration: "line-through" } : {}}>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item.quantity} {item.description}
        <button onClick={() => onRemoveItem(item)}>❌</button>
      </li>
    </>
  );
}
