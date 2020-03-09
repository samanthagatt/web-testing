import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test("species, age, notes inputs are rendered", () => {
    const { getByLabelText, getByText, getByTestId } = render(<AnimalForm />);
    const speciesInput = getByLabelText(/species/i);
    const ageInput = getByLabelText(/age/i);
    const notesInput = getByLabelText(/notes/i);

    // Use the change event to add text to each input
    fireEvent.change(speciesInput, {
        target: {
            value: "Test Species"
        }
    });
    fireEvent.change(ageInput, {
        target: {
            value: "Test Age"
        }
    });
    fireEvent.change(notesInput, {
        target: {
            value: "Test Notes"
        }
    });

    expect(speciesInput.value).toBe("Test Species");
    expect(ageInput.value).toBe("Test Age");
    expect(notesInput.value).toBe("Test Notes");

    // click on the button
    fireEvent.click(getByText(/submit/i));

    // assert that the species is added to the list
    const animalText = getByTestId("Test Species|Test Age|Test Notes")
    expect(animalText).toBeInTheDocument();
});