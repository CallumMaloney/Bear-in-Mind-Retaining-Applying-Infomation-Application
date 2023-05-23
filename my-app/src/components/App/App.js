import React from "react";
import { useState } from "react";
import "./App.css";
import HomePage from "../HomePage";
import MyFlashcards from "../MyFlashcards";
import TestMe from "../TestMe";
import AddAFlashcard from "../AddAFlashcard";
import flashCardsListData from "./stateData";

function App() {
  const [page, setPage] = useState("homepage");
  

  // this is the state for the flashcards the initial value is the data from the stateData.js file
  const [flashCardsList, setFlashCardsList] = useState(flashCardsListData);
  


  function renderPage() {
    if (page === "homepage") {
      return <HomePage setPage={setPage} flashCardsList={flashCardsList} />;
    } else if (page === "myFlashcards") {
      return <MyFlashcards setPage={setPage}  flashcardsList={flashCardsList} setFlashCards={setFlashCardsList} />;
    } else if (page === "testMe") {
      return <TestMe setPage={setPage} flashcardsList={flashCardsList} setFlashCards={setFlashCardsList}/>
    } else if (page === "addAFlashcard") {
      return <AddAFlashcard setPage={setPage} />;
    }
  }

  return <>{renderPage()};</>;
}

export default App;

