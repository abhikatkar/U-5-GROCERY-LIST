
import axios from "axios"
import { useEffect, useState } from "react"



function GroceryList(){

    const [item, setItem] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3003/grocery").then(res=>{
            setItem(res.data);
        })
    },[])


    return(
        <div className="listBox">
         <h4></h4>
         <button>Delete</button>
        </div>
    )
}


export {GroceryList}