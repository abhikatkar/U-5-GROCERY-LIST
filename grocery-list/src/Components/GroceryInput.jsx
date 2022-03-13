import { useState, useEffect } from "react";
import axios from "axios";
function GroceryInput() {
  const [text, setText] = useState("");
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    axios.get(`http://localhost:3003/grocery?_limit=3&_page=${page}`).then((res) => {
      setItem(res.data);
    });
  };

  function handleDelete(id) {
    const updateList = item.filter((item) => {
      return item.id != id;
    });
    setItem(updateList);
  }

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
          fetch("http://localhost:3003/grocery", {
            method: "POST",
            body: JSON.stringify({ title: text }),
            headers: {
              "content-type": "application/json",
            },
          }).then(() => {
            getData();
          });
        }}
      >
        SAVE
      </button>
      {item.map((g) => (
        <div>
          <h2>{g.title}</h2>
          <button
            onClick={() => {
              handleDelete(g.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}

      <div>
      <button onClick={()=>{
        setPage(()=>page-1)
      }}>prep</button>
      <button onClick={()=>{
        setPage(()=>page+1)
      }}>next</button>
      </div>
      
    </div>
  );
}

export { GroceryInput };
