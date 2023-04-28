function Flashcard ({flashcardList, setFlashCards, index, handleClickDelete}) {



    return (
        <div className = "singleFlashcard">
            <div className = "singleFlashcard__card">
                <div className = "singleFlashcard__card-delete">
                    <button className = "delete" onClick={() => handleClickDelete(index)}></button>
                </div>
                <div className = "singleFlashcard__card-category">
                    <div className = "category">{flashcardList.category}</div>
                </div>
                
                <div className="singleFlashcard__card-question">
                    <div className = "question">{flashcardList.question}</div>
                </div>
                <div className = "singleFlashcard__card-answer">
                    <div className = "answer">{flashcardList.answer}</div>
                </div>
                
            </div>
         </div>
    )
}

export default Flashcard