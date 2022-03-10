import { useState } from "react";

function GroceryInput({addList}) {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="add grocery"
        onChange={(e) => {
          // console.log(e.target.value)
          setText(e.target.value);
        }}
      />

      <button
        onClick={() => {
          addList(text);
        }}
      >
        Add
      </button>
    </div>
  );
}

export { GroceryInput };
