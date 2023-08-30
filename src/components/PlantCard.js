import { useState } from "react";

function PlantCard({plant}) {


  const [inStock, setInStock] = useState(plant.inStock)

  const toggleInstock = () => {
    setInStock(inStock => !inStock)
  }

  // const toggleInstock = () => {
  //   console.log(toggleInstock)
  //   setInStock(inStock => !inStock)
  // }


  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={toggleInstock} >In Stock</button>
      ) : (
        <button onClick={toggleInstock} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
