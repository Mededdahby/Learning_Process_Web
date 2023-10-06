// export default function Card({data}) {

import React from 'react';
import {userState} from 'react';

 export default function  Card({ data, backgroundColor }) {
  const cardStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px',
    width: '200px',
    backgroundColor: backgroundColor || 'white',
  };
  // let [cardColor,setCardColor ] = userState("white");
  // let changeColorCard = (e)=>{
  //   setCardColor(e.target.value)
  // }

  return (
    <div style={cardStyle}>
      <input type="color" />
   <img src={'https://robohash.org/'+data.id}/>
      <p>ID: {data.id}</p>
      <p>Name: {data.nom}</p>
      <p>Email: {data.email}</p>
    </div>
  );
}


