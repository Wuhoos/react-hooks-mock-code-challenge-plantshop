import {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plants => setPlants(plants))
  }, [])

  const submitNewPlant = (e) => {
    e.preventDefault()

    const newPlant = {
      "name": e.target.name.value,
      "image": e.target.image.value,
      "inStock": true,
      "price": e.target.price.value
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
        "Accept": "application"
      },
      body: JSON.stringify(newPlant)
    }) .then(res => res.json())
    .then(newPlant => setPlants([...plants, newPlant]))
  }

  const [searchPlant, setSearchPlant] = useState("")

  const filteredPlant = plants.filter(plant => {
    return plant.name.toUpperCase().includes(searchPlant.toUpperCase())
  })

  return (
    <main>
      <NewPlantForm submitNewPlant={submitNewPlant} />
      <Search setSearchPlant={setSearchPlant}/>
      <PlantList plants={filteredPlant} />
    </main>
  );
}

export default PlantPage;
