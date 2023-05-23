import React, { useState, useEffect } from "react";
import "./TestMe.css";
import SortTestMe from "../SortTestMe";

function TestMe({ flashcardsList, setPage, setFlashCards }) {
  const [randomIndex, setRandomIndex] = useState(0); // this is the state for the random index
  const [showAnswer, setShowAnswer] = useState(false); // this is the state for the answer
  const [filteredFlashcards, setFilteredFlashcards] = useState(flashcardsList); // this state will be used to sort the flashcards

  useEffect(() => { // this useEffect will re-render all flashcards whenever flashcardsList changes
    setRandomIndex(Math.floor(Math.random() * filteredFlashcards.length - 1));
  }, [filteredFlashcards]);

  const randomizedFlashcard = filteredFlashcards[randomIndex]; //   this is the random flashcard that is being displayed

  function handleQuestionButtonClick() { // this function is called when the "Request A Question" button is clicked
    setRandomIndex(Math.floor(Math.random() * filteredFlashcards.length));
    setShowAnswer(false);
  }

  function handleAnswerButtonClick() { // this function is called when the "Reveal Answer" button is clicked
    setShowAnswer(true);
  }
  
  return (

    <div className="overlay">
      <div className="overlay__testme-content">
        <div className="overlay__testme-content-heading">
          <h1>Test Yourself</h1>
          <div className="overlay__testme-content-heading-button">
          <button onClick={() => {setPage("homepage")}}>Go Back</button>
          </div>
        </div>
        <div className="overlay__testme-content-subheading">
          <h2>Test yourself on the topics you have learnt so far:</h2>
        </div>
        <div className="overlay__testme-content-sort">
          <SortTestMe flashcardsList={flashcardsList}setFlashCards={setFlashCards}setFilteredFlashcards={setFilteredFlashcards}/>
        </div>
        <div className="overlay__testme-content-button">
          <button onClick={handleQuestionButtonClick}>Request A Question</button>
        </div>
        <div className="overlay__testme-content-question">
          <h2>Question:</h2>
          {randomizedFlashcard && ( // this is a conditional rendering. If there is a random flashcard, then the question is displayed
            <h3>{randomizedFlashcard[Object.keys(randomizedFlashcard)[1]]}</h3> // this is the question
          )}
        </div>
        <div className="overlay__testme-content-answer">
        {showAnswer ? ( // this is a conditional rendering. If showAnswer is true, then the answer is displayed
          <>
            <div className="overlay__testme-content-answerbox">

              <h2>Answer:</h2>
              {randomizedFlashcard && ( // this is a conditional rendering. If there is a random flashcard, what is inside the parentheses is displayed
                <h3>{randomizedFlashcard[Object.keys(randomizedFlashcard)[2]]}</h3>
              )}
            </div>
          </>
        ) : ( // if showAnswer is false, then nothing is displayed which is null (what is inside the parentheses)
          null
        )}
          <div className="overlay__testme-content-answer-button">
            <button onClick={handleAnswerButtonClick}>Reveal Answer</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TestMe;