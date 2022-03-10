



function GroceryList({data, status,id,handleDelete}){



    return(
        <div className="listBox">
         <h4>{data}</h4>
         <button onClick={()=>{handleDelete(id)}}>Delete</button>
        </div>
    )
}


export {GroceryList}