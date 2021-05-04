import React,{useState} from "react"

const MyApp = () => {

    const [ArraySearch , setArraySearch ] = useState(["anna","paulo","daniel","federer","lionel","mario","marta","rose","ricardo"])
    
    const [searchName , setSearchName] = useState({data : ""})
    const [thing , setThing] = useState("")

    const serchboxHandler = (event) => {
        setSearchName({data : event.target.value})
    }

    console.log(typeof(ArraySearch))
    console.log("Array",ArraySearch)
    console.log("User Input",(searchName.data))

    const clickHandler = () => {
        const arrayCopy = [...ArraySearch];
        for (let i = 0 ; i <arrayCopy.length ; i ++){
            if (searchName.data === arrayCopy[i]){
                console.log("SAME",arrayCopy[i])
                setThing(arrayCopy[i])
            }
        }
    }



    return (
        <div>
            <ul>
                {ArraySearch.map((i, index) => {
                    return(<li key={index}>name : {i}</li>)
                })}
            </ul>

            <input type="text" value={searchName.data} onChange={serchboxHandler} />
            <h5>user Input : {searchName.data}</h5>
            <button onClick={clickHandler}>Click to search name</button>
            <h1>Named searched : {thing}</h1>
        </div>
    )
}


export default MyApp