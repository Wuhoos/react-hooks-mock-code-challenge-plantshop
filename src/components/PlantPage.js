import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(plants => setPlants(plants))
  },[])

  const postingPlantToData = (newPlant) => {
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newPlant)
    }) .then(res => res.json())
    .then(newPlant => setPlants([...plants,newPlant]))
  }

  const [search, setSearch] = useState('')


  const filteredPlant = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })
  


  return (
    <main>
      <NewPlantForm postingPlantToData={postingPlantToData} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlant} />
    </main>
  );
}

export default PlantPage;
