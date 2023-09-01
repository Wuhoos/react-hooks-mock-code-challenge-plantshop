import React, {useState} from "react";

function PlantCard({plant}) {

  const [stock, setStock] = useState(plant.inStock)

  const toggleButtoon = () => {
    setStock(stock => !stock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stock ? (
        <button onClick={toggleButtoon} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleButtoon}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;