import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { useEffect, useState } from "react";
// import { v4 as uuid } from "uuid";


function Grocery() {
  const [list, setList] = useState([]);
  
  // const addList = (data) => {
  //   const payload = {
  //     data,
  //     status: false,
  //     id: uuid(),      
  //   };
  //   setList([...list, payload]);
  // };

  

  


  



  return (
    <div className="grocery">
      <h1>Grocery List</h1>
      <GroceryInput/>
      {/* <GroceryList/> */}
    </div>
  );
}

export { Grocery };
