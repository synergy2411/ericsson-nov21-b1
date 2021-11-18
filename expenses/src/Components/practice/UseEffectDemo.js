import { useEffect, useState } from "react";
import axios from 'axios';

const UseEffectDemo = () => {
    const [counter, setCounter] = useState(0)

    // useEffect(() => {
    //     console.log('Use Effect Works')
    // })

    // useEffect(() => {
    //     console.log('Use Effect Works')
    // },[])

    // useEffect(() => {
    //     console.log('Use Effect Works')
    // },[counter])

    useEffect(()=>{
        console.log("Use Effect Works")
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response=>console.log(response)).catch(err=>console.log(err))
        return () => {
            console.log("Clean up Function works")
        }
    },[])

    return (<div>
        <p>Use effect in action...</p>
        <h4>Counter : {counter} </h4>
        <button className="btn btn-dark" onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>)
}

export default UseEffectDemo;