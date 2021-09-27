import React, { useState } from "react";
import "./HomeScreen";
import bright from "./component/bright.jpg"
import ib from "./component/ib.jpg";
import sam from "./component/sam.jpg";
import tahibat from "./component/tahibat.jpg";
import vero from "./component/vero.jpg";

const HomeScreen = () => {
  const [data, setData] = useState([
    {
      id: 0,
      name: "Ibukun",
      quote: "God is Great",
      image: ib,
      time: Date.now().toLocaleString,
      
    },
    {
     id: 1,
     name: "Samsal",
     quote: "Failure is not final",
     image: sam,
     time: Date.now().toLocaleString,
    },

    {
      id: 2,
      name: "tahibat",
      quote: "I love diamond",
      image: tahibat,
      time: Date.now().toLocaleString,
    
    },
    {
      id: 3,
      name: "vero",
      quote: "God is gracious",
      image: vero,
      time: Date.now().toLocaleString,
    },
    {
      id: 4,
      name: "bright",
      quote: "Today is bright",
      image: bright,
      time: Date.now().toLocaleString,
    },
  ]);

return (
  <div className="container">
    <div className="containerWrapper"> {data.map((user) => (
      <div className="containerCard">
        <div className="containerCardRow"> </div>
          <div className="containerCardCancel"> X </div>
          <image className="containerCardRowImage"src={user.image}></image>
          <div className="containerCardName">{user.name}</div>
          <div className="containerCardQuote">{user.quote}</div>
          <div className="containerCardTime">{user.time}</div>
          </div>
    ))}
    </div>
  </div>
);
  };        



export default HomeScreen;