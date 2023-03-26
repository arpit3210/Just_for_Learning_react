// import React,{useEffect,useState} from 'react'
import React, { useEffect } from 'react'
function Contact(props)
{
    // const [Name,SetName]=useState("Arpit");
    // const [age,setage]=useState("Minimum age")
    // useEffect(()=>
    // {
    //     console.warn("hello from hooks")
    // },[age,Name])


    // Using Hooks with Props
     useEffect(()=>{
        console.warn("Props check1 with Name",props.Name);
     });
     useEffect(()=>{
        console.warn("Props check2 with Name",props.Name);
     }, [props.Name]);
    return(

        <div>
            <h1>Contact us Component</h1>

            {/* <h1>{(Name)} </h1>
            <h1>{(age)} </h1>
            <button onClick={()=>{setage("Maximum Age")}}>Change to maximum</button>
            <button onClick={()=>{SetName("Arpit Singh")}}>Show FullName</button> */}


            {/* // Using Props in functionbal Component , For this we have to define with function  */}
       
       <h2>{props.Name}</h2>
       
        </div>
    );
}

export default Contact;  