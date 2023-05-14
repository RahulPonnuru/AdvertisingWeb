import Axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";


function GetAdd(){
    const [itemDetail,setItemDetail]=useState([]);
    useEffect(()=>{
        // Axios.get("http://localhost:3007/getAdverData").then((response)=>{
        //     console.log(JSON.stringify(response.template_name));
        //     setItemDetail(response.data);
        // });
        fetch('http://localhost:3007/getAdverData')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    },[]);
    return (
        <div>
            <h1>itemDetail</h1>
            
        </div>
    )
}

export default GetAdd;