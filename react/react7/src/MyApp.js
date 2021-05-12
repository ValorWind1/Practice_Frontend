import React from "react"
import Pic from "./Pic"
import pics from "./Pictures"
import Context_ from "./Context_"

const MyApp = () => {
  const myRef = React.useRef();
    
    const Array1 = [...pics]
    Array1.map((i,index) => {
        return <li key={i.id}> src={i.url}</li>
    })
    console.log("New Array",Array1)
    console.log("STUFF",pics[1].id, "and" , pics[1].url)

    const focusTextHandler = () => {
        myRef.current.focus();
    }

    

    return (
        <div>
        <Context_.Provider value={"ya ya context"}>
            <Pic key={pics[1].id} src={pics[1].url}> PROPS CHILDREN HERE : PHOTOS </Pic>
            
            <ul>
            {Array1.map((i,index) => {
        return <li key={i.id}> <img src={i.url}/></li>
                })}
            </ul>
        
        {/* // usihng ref */}

                <input type="text" ref={myRef}/>
                <button onClick={focusTextHandler}>Click me</button>
        </Context_.Provider>
                
        </div>
    )
}

export default MyApp