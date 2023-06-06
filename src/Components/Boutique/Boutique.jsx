import React, { useState } from "react";
import { list } from "../../data";
import "./Boutique.css";
const Boutique = () => {
  const [soap, setSoap] = useState(list);
  return (
    <div className="Boutique">
        <div className="topCategory">
            <div>filtre</div>
            <div className="classes">
    <label htmlFor="">classes</label>
    <input id="searchbar" onkeyup="" type="text"
        name="search" placeholder=""/>
    </div>
    <div className="pageNumber">
        <span>voir</span>
        <button>12</button>
        <button>24</button>
        <button>36</button>
    </div>
        </div>
      <div className="ListSoap">
        {soap.map((el, i) => (
          <div className="soaps" key={i}>
            <img src={el.img} alt="" />{" "}
            <div className="banksPr">
              <h2>{el.name}</h2>
              <p>Phone : {el.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boutique;
