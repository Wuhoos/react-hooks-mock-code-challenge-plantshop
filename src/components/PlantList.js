import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, buyPlant, unBuyPlant}) {
  return (
    <ul className="cards">
      {plants.map(plant => {
        return <PlantCard plant={plant} key={plant.id} buyPlant={buyPlant} unBuyPlant={unBuyPlant} />
      })}
    </ul>
  );
}

export default PlantList;
