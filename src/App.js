import "./App.css";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charge", quantity: 12, packed: true },
];

function App() {
  return (
    <>
      <div className="appÁ">
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </>
  );
}

function Logo() {
  return (
    <>
      <h1>🏝️ Far Away 🧳</h1>
    </>
  );
}

function PackingList() {
  return (
    <>
      <div className="list">
        <ul>
          {initialItems.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

function Item({ item }) {
  return (
    <>
      <li style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button>❌</button>
      </li>
    </>
  );
}

function Form() {
  const [description, setDescription] = useState("");
  const [qunatity, setQunatity] = useState(1);
  function handleSubmit(event) {
    event.preventDefault();

    if (!description) {
      alert("Please enter description");
      return;
    }

    const listItem = { description, qunatity, packed: false, id: Date.now() };
    initialItems.push(listItem);
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip?</h3>
        <select
          value={qunatity}
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
function Stats() {
  return (
    <>
      <footer className="stats">
        <em>You have X items in your list. You have packed X(X%)</em>
      </footer>
    </>
  );
}

export default App;
