export default function Stats({ totalItemsList }) {
  const totalItems = totalItemsList.length;
  if (!totalItems) {
    return <footer className="stats">You need to add some items.</footer>;
  }
  const packedItem = totalItemsList.count("packed", true);
  const percentage = Math.round((packedItem / totalItems) * 100);
  return (
    <>
      <footer className="stats">
        {percentage === 100 ? (
          <em>You are all ready to go.</em>
        ) : (
          <em>
            You have {totalItems} items in your list. You have packed{" "}
            {packedItem}({percentage}%)
          </em>
        )}
      </footer>
    </>
  );
}
