import React from "react";
import  ReactDOM  from "react-dom";
import "./first.css";
import Card from "./Cards";
import Sdata from "./Sdata"



// function Hdata(val){
//     return(
//         <Card  imgsrc  = {val.imgsrc} 
        
// title = {val.title}
// sname = {val.sname}
// link = {val.link}></Card>


//     );

// }


ReactDOM.render(

<>
<h1 className="heading">List of Top 5 Original Hotstar movies</h1>





{Sdata.map(function Hdata(val){
    return(
        <Card  imgsrc  = {val.imgsrc} 
        
title = {val.title}
sname = {val.sname}
link = {val.link}></Card>

    );
    
})}


</>,document.getElementById("root")


);