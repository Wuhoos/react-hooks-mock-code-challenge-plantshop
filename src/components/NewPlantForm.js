import React, {useState} from "react";

function NewPlantForm({postingPlantToData}) {

  const [form, setForm] = useState({
    name: "",
    image: "",
    inStock: true,
    price: ""
  })


  const submitNewPlant = (e) => {
    e.preventDefault()
    postingPlantToData(form)
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitNewPlant}>
        <input value={form.name} onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input value={form.image} onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input value={form.price} onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;