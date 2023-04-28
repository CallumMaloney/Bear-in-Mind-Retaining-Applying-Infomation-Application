import Flashcard from "../Flashcard/"
import { useEffect } from "react";
import "./MyFlashcards.css"

function MyFlashcards({flashcardsList, setPage, setFlashCards}) {

    function handleClickDelete(index) {
        const newFlashcardsList = [...flashcardsList]; // make a copy of the array
        console.log(flashcardsList)
        console.log(newFlashcardsList)
    newFlashcardsList.splice(index, 1); // remove the flashcard at the specified index
    setFlashCards(newFlashcardsList);
        
    }

    useEffect(() => {
        setFlashCards(flashcardsList);
      }, [setFlashCards, flashcardsList]);
    
  return (
    <div className="flashcardsOverlay">

        <div className="overlay__header">

            <div className="overlay__header-heading">
                <h1>My Flashcards</h1>
            </div>
            <div className="overlay__header-btn">

                <button onClick={() => {setPage("homepage")}}>  Go Back</button>

            </div>
        </div>
        <div className="overlay__content">

            {flashcardsList.map((flashcard, index) => {
                return <Flashcard 
                key={index} 
                flashcardList={flashcard} 
                index={index}
                setFlashCards={setFlashCards}
                handleClickDelete={handleClickDelete}
                />
            })}

        </div>
    </div>
  );
}
export default MyFlashcards;