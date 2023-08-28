import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, submitNewPlant, buyPlant, setPlantsSearch, unBuyPlant}) {
  return (
    <main>
      <NewPlantForm submitNewPlant={submitNewPlant} />
      <Search setPlantsSearch={setPlantsSearch} plants={plants} />
      <PlantList plants={plants} buyPlant={buyPlant} unBuyPlant={unBuyPlant} />
    </main>
  );
}

export default PlantPage;
