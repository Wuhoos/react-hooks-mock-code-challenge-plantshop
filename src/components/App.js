import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plantSearch, setPlantsSearch] = useState("")

  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plantsList => setPlants(plantsList))
  }, [])

  const submitNewPlant = event => {
    event.preventDefault()

    const newPlant = {
      "name": event.target.name.value,
      "image": event.target.image.value,
      "price": event.target.price.value
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(newPlant => setPlants([...plants, newPlant]))
  }

  const buyPlant = (id) => {

    const updatedPlants = plants.map(plant => {
      if(plant.id === id) {
        return {
          "id": plant.id,
          "name": plant.name,
          "image": plant.image,
          "soldOut": true,
          "price": plant.price
        }
      } else { return plant }
    });
    setPlants(updatedPlants);
  }

  const unBuyPlant = (id) => {

    const updatedPlants = plants.map(plant => {
      if(plant.id === id) {
        return {
          "id": plant.id,
          "name": plant.name,
          "image": plant.image,
          "soldOut": false,
          "price": plant.price
        }
      } else { return plant }
    });
    setPlants(updatedPlants);
  }
  
  const filteredPlants = plants.filter(plant => {
    if(plantSearch === "") {
      return true
    } else {
      return plant.name.toUpperCase().includes(plantSearch.toUpperCase())
    }
  }) 

  return (
    <div className="app">
      <Header />
      <PlantPage plants={filteredPlants} setPlantsSearch={setPlantsSearch} submitNewPlant={submitNewPlant} buyPlant={buyPlant} unBuyPlant={unBuyPlant} />
    </div>
  );
}

export default App;
