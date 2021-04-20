import React,{useState,useEffect} from "react"


const MyApp = (props) => {

    const [numbers,setNumbers] = useState(0);
    const [numbersArrays,setNumbersArrays] = useState([]);
    const [total, setTotal] = useState([])
    
    
    useEffect(() => {
       setInterval(() => {      
                setNumbers( i => i + 1)     
        }, 2000) 

     
    },[])
    useEffect(() => {
        console.log("NUMBER",numbers)
        if(numbers === 6){
            setNumbers(0)
        }
    })

    const clickHandler = () => {
        const array = numbersArrays.concat(numbers)
        setNumbersArrays(array)
        console.log("ARRAY",numbersArrays)
    }

    const sumHandler = () => {
        let counter = 0 
        for (let i = 0 ; i < numbersArrays.length; i ++ ){
            setTotal (counter += numbersArrays[i])

        }
    }

    return(
        <div>
            <h1> Hello </h1>
            <h1 onClick={clickHandler}>{numbers}</h1>
            <tr onClick={sumHandler}> Numbers Arrays : {numbersArrays}</tr>
            <h1>Total : {total}</h1>
            
        </div>
    )
}

export default MyApp