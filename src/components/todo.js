import React ,{useState} from 'react'
import './stylr.css';
const Todo = () => {
    const[input,setInput]=useState("");
    const [todos,setTodos] = useState([]);
    const addTodo=()=>{
        if(!input) {
            
        }
        else{
            setTodos([...todos,input])
            setInput('')
        }
        
    }

    const deleteItem=(id)=>{
        console.log(id);
        const updatedTodos =todos.filter((elem,ind)=>{
            return ind !== id; })
    
            setTodos(updatedTodos);
        

    }

    const removeAll=()=>{
        setTodos([]);
    }

    /* const updateItem=(id)=>{

    } */
    
    
    
    return (
        <div>
            <img src='https://www.pngitem.com/pimgs/m/245-2456104_png-transparent-icon-todo-list-png-download.png' className="rounded mx-auto d-block" alt='img'/>
            <p className='head'>Todo List</p>
            <div className="input-group" id="form">
            <input class="form-control mr-sm-2" type="text" placeholder="Enter your next task....." value={input} 
            onChange={(e)=>setInput(e.target.value)}
            />

            <span id='add'><button onClick={addTodo} type="button" className="btn btn-primary">Add</button></span>
                        </div>
                        <button onClick={removeAll } type="button" id='btn' class="btn btn-primary btn-lg">REMOVE ALL</button>
     <div id='kk'>
             {
                 todos.map((elem,ind)=>{
                 return(
                     <div className="alert alert-primary" role="alert" key={ind}>
  {elem}
  <svg id='ge' /* onClick={()=>updateItem(ind)} */ xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
<svg id='et' onClick={()=>deleteItem(ind)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
</div>
                 )
                } )
             }               
            </div>
        </div>
    )
}

export default Todo


