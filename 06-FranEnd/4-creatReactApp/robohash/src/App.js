import React, { useEffect,useState } from 'react';
import Card from './Card';
import './App.css';
import robots from './robots'
import AddCrad from './ajouter'

function App() {


  const [filteredRobots, setFilteredRobots] = useState(robots);
  const [color, setColor] = useState("");

  useEffect(()=>{
    (async ()=>{
      let resp = await fetch("https://jsonplaceholder.typicode.com/users")
      let users = await resp.json();
      setFilteredRobots(users)
    })
  },[])

  

  const changeHandler = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = robots.filter((robot) =>
      robot.nom.toLowerCase().includes(searchTerm)
    );
    setFilteredRobots(filtered);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const addCardHandler=(e)=>{
    console.log("");
    };
  return (
    <div className="container">
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={changeHandler}
        />
      </div>
      <button>
        <input type='color' onChange={handleColorChange}/>
      </button>
      
      {/* <Search handleChange={changeHandler} /> */}
      <div className='addCard'><AddCrad/ ></div>
        <div className="cardList">
        {filteredRobots.map((robot) => (
          <Card data={robot} key={robot.id} backgroundColor={color} />
        ))}
      </div>
      <div >
      </div>
    </div>
  );
}

export default App;
