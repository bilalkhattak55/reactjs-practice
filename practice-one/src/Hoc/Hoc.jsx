import { useState } from "react";

const SomeOtherValues = OtherValues(CounterVlaue)



const Hoc =()=> {
    const [counter, setCounter] = useState(1)


    const handleIncrease =()=> {
        setCounter(counter + 1)
    }
    const handleDecrease =()=> {
        setCounter(counter - 1)
    }

    return(
        <>
          <Button onclick={handleIncrease}  lable={function(name){
            return <div><h2>Custom lable for Increase = {name}</h2></div>
          }}/>
          <SomeOtherValues counter={counter} myName={"my name is khan"}  />
          <Button onclick={handleDecrease}  lable={function(name){
            return <div><h2>My custom lable for decrease = {name}</h2></div>
          }
          } />
        </>
    )
}

function Button({lable, onclick}) {
    let name = "bilal"
    return <button onClick={onclick}>{lable(name)}</button>
}

function CounterVlaue({counter, myName, specialChar}) {
    return <div>
        {counter}{specialChar}
        <h4>{myName}</h4>
        </div>
}

export default Hoc;

function OtherValues(Component) {
    return function (props) {
       return <div>
            <h3>My Hoc Function</h3>
            <Component {...props} specialChar={"*"} />
       </div>
    } 
}



    
