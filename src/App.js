import { useState } from "react";

import "./App.css";
import Logo from "./logo";
import Form from "./form.js";
import Stats from "./State.js";
import PackingList from "./Packing-list.js";

// Creating a prototype for checking count of packed item
// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, "count", {
  value: function (property, value) {
    return this.filter((item) => item[property] === value).length;
  },
  writable: true,
  configurable: true,
});

function App() {
  const [itemList, setItemList] = useState([]);

  function handleDeleteItem(item) {
    setItemList(itemList.filter((listItem) => listItem.id !== item.id));
  }

  function clearList() {
    const confirm = window.confirm(
      "Are you sure you want to delete all the items"
    );
    confirm && setItemList([]);
  }

  function onToggleItem(id) {
    setItemList(
      itemList.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <>
      <div className="app">
        <Logo />
        <Form itemList={itemList} onAddItem={setItemList} />
        <PackingList
          itemList={itemList}
          onRemoveItem={handleDeleteItem}
          onToggleItem={onToggleItem}
          onClearList={clearList}
        />
        <Stats totalItemsList={itemList} />
      </div>
    </>
  );
}

export default App;
