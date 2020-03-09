import React, { useState } from "react";

const AnimalForm = ({ errors, touched, values }) => {
    const [animals, setAnimals] = useState([
        {
            species: "Lion",
            age: "12",
            notes: "",
            id: 365
        }
    ]);
    const [animal, setAnimal] = useState({ 
        species: "", 
        age: "", 
        notes: "", 
    });
    const handleChange = e => {
        setAnimal({
            ...animal, 
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        const newAnimal = {
            ...animal,
            id: Date.now()
        }
        setAnimals([...animals, newAnimal]);
    }

    return (
        <>
        <section className="animal-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="species">Species:</label>
                <input 
                    id="species"
                    type="text"
                    name="species"
                    onChange={handleChange}
                />
                <label htmlFor="age">Age:</label>
                <input 
                    id="age"
                    type="text"
                    name="age"
                    onChange={handleChange}
                />
                <label htmlFor="notes">Notes:</label>
                <textarea 
                    id="notes"
                    name="notes"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </section>
        <section className="animals-list">
            {animals.map(animal => {
                return (
                    <div className="animal-card" key={animal.id} data-testid={`${animal.species}|${animal.age}|${animal.notes}`}>
                        <h3>{animal.species}</h3>
                        <p>Age: {animal.age}</p>
                        <p>Notes: {animal.notes}</p>
                    </div>
                )
            })}
        </section>
        </>
    )
}

export default AnimalForm;