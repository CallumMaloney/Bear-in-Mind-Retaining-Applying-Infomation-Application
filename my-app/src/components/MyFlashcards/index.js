import Flashcard from "../Flashcard/"
import SortFlashcards from "../SortFlashcards";
import { useEffect, useState } from "react";

import "./MyFlashcards.css"

function MyFlashcards({flashcardsList, setPage, setFlashCards}) {

    const [filteredFlashcards, setFilteredFlashcards] = useState(flashcardsList); // this state will be used to sort the flashcards

    function handleClickDelete(index) { // index is the index of the flashcard to be deleted
        const newFlashcardsList = [...flashcardsList]; // make a copy of the array
        newFlashcardsList.splice(index, 1); // remove the flashcard at the specified index
        setFlashCards(newFlashcardsList);
        
    }
    function handleSortChange(option) { // option is the value of the selected option selected in the SortFlashcards component
        let sortedFlashcards = [...flashcardsList]; // make a copy of the flashcardsList array
        switch (option) {
          case "category":
                sortedFlashcards.sort((a, b) => a.category.localeCompare(b.category)); // sort the flashcards by category using the localeCompare method (unicode comparison)
                break;
            case "a-z":
                sortedFlashcards.sort((a, b) => a.question.localeCompare(b.question)); // sort the flashcards by question (ascending) using the localeCompare method (unicode comparison)
                break;
            case "z-a":
                sortedFlashcards.sort((a, b) => b.question.localeCompare(a.question)); // sort the flashcards by question (descending) using the localeCompare method (unicode comparison)
                break;
          default:
            sortedFlashcards = flashcardsList; // if no option is selected, set the sortedFlashcards array to the original flashcardsList array
        }
        setFilteredFlashcards(sortedFlashcards);
      }
    

    useEffect(() => { // this useEffect will re-render all flashcards whenever flashcardsList changes
        setFilteredFlashcards(flashcardsList);
    }, [flashcardsList]);

    useEffect(() => {
        setFilteredFlashcards(flashcardsList); // this useEffect will sort filteredFlashcards whenever flashcardsList changes
    }, [flashcardsList]); 

    return (
        <div className="flashcardsOverlay">
            <div className="overlay__header">
                <div className="overlay__header-heading">
                    <h1>My Flashcards</h1>
                </div>
                <div className="overlay__header-btn">
                    <button onClick={() => {setPage("homepage")}}>Go Back</button>
                </div>
            </div>
            <div className="overlay__sort">
                <SortFlashcards handleSortChange={handleSortChange}/>
            </div>
            <div className="overlay__content">
                {filteredFlashcards.map((flashcard, index) => {
                    return (
                        <Flashcard 
                            key={index} 
                            flashcardList={flashcard} 
                            index={index}
                            setFlashCards={setFlashCards}
                            handleClickDelete={handleClickDelete}
                        />
                    );
                })}
            </div>
        </div>
    );
}
export default MyFlashcards;