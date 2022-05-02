

import {useState} from "react";

import {useDispatch , useSelector} from "react-redux"

import { Todo } from "../Redux/action";


export const Todos =()=>{
    


    const todos=useSelector((store=>store.todos));

    const dispatch=useDispatch()
    
    
     const [text,setText]=useState("")

     const handleAdd=()=>{
        dispatch(Todo({
            title:text,
            status:false,
        }))
     }
    return(
        <div>
            <h1>React-Redux Todo</h1>
            <input type="text" placeholder="WriteTodo" onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleAdd} >ADD Todo</button>
             {todos.map((e)=>(
                 <div key={e.title}>{e.title}</div>
             ))}
        </div>
    )
}