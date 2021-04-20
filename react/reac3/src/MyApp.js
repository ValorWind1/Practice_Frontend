import React,{useState,useEffect} from "react";
import axios from "axios";

const MyApp = () => {

    const [pokedata , setPokedata] = useState([]);
    const url = "https://pokeapi.co/api/v2/pokemon";
    const[userinput , setUserinput] = useState({data : " "})
    const [info , setInfo] = useState([]);
    
    useEffect(() => {
        axios.get(url).then(json => setPokedata(json.data))      
    },[])
    
    useEffect(() => {
        console.log(pokedata.results)
        
    })

    const userInputHandler = (event) => {
        setUserinput({data : event.target.value})
    }

    const clickHandler = () => {
        const data = [...pokedata.results];
        let userInput = userinput.data

        for( let i =0 ; i < data.length ; i++){
            if (userInput === data[i].name){
                setInfo(data[i].name +" "+ data[i].url)           
            }  
            console.log("for loop",data[i].name + data[i].url)     
        }     
        console.log("INPUTTTT",userInput)
    }

    
console.log("INFO",info)
    return(
        <div>
            <h1>hi</h1>
            <input type="text" value={userinput.data} onChange={userInputHandler}/>
            <h2 onClick={clickHandler}>{userinput.data}</h2>
            <h1>INFO : {info}</h1>
        </div>
    )
}

export default MyApp