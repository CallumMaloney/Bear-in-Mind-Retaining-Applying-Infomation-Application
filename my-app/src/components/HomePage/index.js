import React from "react";
import { useState } from "react";
import "../App/App.css";
import bearTitleImage from "../../assets/bearTitleImage.png";
import RandomFlashCard from "../RandomFlashCard";
import flashCardsListData from "./stateData";

function HomePage({setPage}) {
  // this is the state for the flashcards the initial value is the data from the stateData.js file
    const [flashCardsList, setFlashCards] = useState(flashCardsListData);

    function handleClick(page) {
        setPage(page);
    }

  return (
    <div className="App">
      <div className="overlay">
        <header className="header">
          <div className="header__image">
            <img src={bearTitleImage} alt="bearTitleImage" />
          </div>
        </header>
        <main>
          <RandomFlashCard
            flashcards={flashCardsList}
            flashCardsListData={flashCardsListData}
          />

          <nav className="nav__buttons">
            <div className="nav__buttons-button">
              <button>Add A Flashcard</button>
            </div>
            <div className="nav__buttons-button">
              <button onClick={() => handleClick("myFlashcards")}>
                My Flashcards
              </button>
            </div>
            <div className="nav__buttons-button">
              <button>Test Me</button>
            </div>
          </nav>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
