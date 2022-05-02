import {addCount} from "../Redux/action"
import  "./counter.css";

import {useDispatch, useSelector} from "react-redux"

export const Counter = () => {
    const dispatch = useDispatch()

    const counter = useSelector((store)=>store.counter)


    return (
         <div>
         
         <h1>Counter : {counter}</h1>
         

         <button onClick={()=>{
             dispatch(addCount(1));
         }}
         >
          ADD 1
          </button>

         </div>
    );
};