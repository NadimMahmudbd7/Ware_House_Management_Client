import { useEffect, useState } from "react"

const PerUSer=(id)=>{
    const[Oneproduct,setOneproduct]=useState({})
    useEffect(()=>{
        const url = `http://localhost:4000/updateproduct/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOneproduct(data))
    },[Oneproduct])
    return[Oneproduct,setOneproduct]
}
export default PerUSer