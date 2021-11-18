import { useEffect, useState } from "react";

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
        return () => {
            console.log("Clean up Function works")
        }
    })

    return (<div>
        <p>Use effect in action...</p>
        <h4>Counter : {counter} </h4>
        <button className="btn btn-dark" onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>)
}

export default UseEffectDemo;