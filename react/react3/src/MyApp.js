import React,{useState} from "react"

const MyApp = () => {

    const [array1,setArray1] = useState ({numArray1 : ["sem","dan","lor","arie","lok","ban","opw","sdads","sdad"]});


    const arraySpliceHandler = () => {
        const arrayNames = [...array1.numArray1]
        console.log("INSIDE ARR",arrayNames)
        // const convertToArray = Array.from(arrayNames)

        const filter = arrayNames.filter(i => i.toLowerCase().startsWith("s"))
        setArray1(filter) 
        console.log("FILTERS",filter)
    }


    const values = Object.values(array1)

    console.log("ARRAY OUTSIDE ",array1)


    const arraynums = Object.values(array1)


    return(
        <div>
        <h1>{`${arraynums}`}</h1>
        <button onClick={arraySpliceHandler}>
            filter all s words 
        </button>

        </div>
    )
}

export default MyApp