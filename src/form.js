import { useState } from "react";

export default function Form({ itemList, onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQunatity] = useState(1);
  function handleSubmit(event) {
    event.preventDefault();
    setDescription("");

    if (!description) {
      alert("Please enter description");
      return;
    }

    const listItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem([...itemList, listItem]);
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip?</h3>
        <select
          value={quantity}
          onChange={(e) => setQunatity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}
