import React, { useState, useEffect } from "react";

function SortTestMe({ flashcardsList, setFilteredFlashcards }) {
  const [selectedCategory, setSelectedCategory] = useState("All"); // this is the state for the selected category
  const [categories, setCategories] = useState([]); // this is the state for the categories

  useEffect(() => { 
    const uniqueCategories = ["All", ...new Set(flashcardsList.map(item => item.category))]; // this is an array of unique categories
    setCategories(uniqueCategories); // set the categories state to the unique categories array
  }, [flashcardsList]);

  const handleCategoryChange = event => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredFlashcards(flashcardsList);
    } else {
      const filteredFlashcards = flashcardsList.filter(
        item => item.category.toLowerCase() === category.toLowerCase() // filter the flashcardsList array to only include flashcards with the selected category
      );
      setFilteredFlashcards(filteredFlashcards);
    }
  };

  return (
    <div className="sort-testcards">
      <label htmlFor="category-select">Select Category:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        {categories.map( category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortTestMe;