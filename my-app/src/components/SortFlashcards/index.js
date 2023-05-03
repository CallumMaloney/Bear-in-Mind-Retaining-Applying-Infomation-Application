import React from "react";
import "./SortFlashcards.css";

function SortFlashcards({ handleSortChange }){

    function handleChange(event) { // event is the onChange event
        const selected = event.target.value; // selected is the value of the selected option
        handleSortChange(selected); //  call the handleSortChange function passed down from MyFlashcards and pass it the selected value
      }



      return(
        <div className="sort-flashcards">
            <label htmlFor="sort-flashcards__select-box">Sort By:</label>
            <select id="sort-flashcards__select-box" onChange={handleChange}>
                <option value="category">Category</option>
                <option value="a-z">Ascending</option>
                <option value="z-a">Descending</option>
            </select>
        </div>
    )
}


export default SortFlashcards;