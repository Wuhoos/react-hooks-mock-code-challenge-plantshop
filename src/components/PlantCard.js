import React from "react";

function PlantCard({plant, buyPlant, unBuyPlant}) {

  // (boolean) ? (if the boolean is true) : (if the boolean is false)
  // plant.soldOut ? In Stock : Out of Stock

  console.log(plant)
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!plant.soldOut ? (
        <button className="primary" onClick={() => buyPlant(plant.id)} >In Stock</button>
      ) : (
        <button onClick={() => unBuyPlant(plant.id)} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
