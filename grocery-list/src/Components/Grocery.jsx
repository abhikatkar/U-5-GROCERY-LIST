import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function Grocery() {
  const [list, setList] = useState([]);

  const addList = (data) => {
    const payload = {
      data,
      status: false,
      id: uuid(),
      
    };
    setList([...list, payload]);
  };

  function handleDelete(id) {
    // alert(id);
    const updateList = list.filter((item)=>{
        return item.id!=id;
  });
//  console.log(list)
    setList(updateList);
//  console.log(list)

  }

  return (
    <div className="grocery">
      <h1>Grocery List</h1>
      <GroceryInput addList={addList} />
      {list.map((item) => (
        <GroceryList 
        handleDelete={handleDelete} 
        {...item}
       />
      ))}
    </div>
  );
}

export { Grocery };
