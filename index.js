import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


let curDate = new Date(2020, 3, 17, 19);
curDate = curDate.getHours();

const cssStyle ={};

let greeting ="";

if(curDate >=1 && curDate <12)
{
greeting = "Good Morning";
cssStyle.color = "green";
}
else if(curDate >= 12 && curDate <15)
{
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
}
else if(curDate >=15 && curDate <20)
{
  greeting = "Good Evening";
  cssStyle.color = "Blue";
}
else
{
  greeting = "Good Night";
  cssStyle.color = "Black";
}

ReactDOM.render(
 <>
<div>
  <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
  <br></br>

  
  </div></>,
  document.getElementById('root')
  
);


