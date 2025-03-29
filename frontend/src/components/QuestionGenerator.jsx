import React, { useState } from "react";
import axios from "axios";

const QuestionGenerator = ({ selectedSubject }) => {
    const [questionData, setQuestionData] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");
    const [feedback, setFeedback] = useState("");

    const fetchQuestion = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/generate-question?subject=${selectedSubject}`);
            setQuestionData(response.data);
            setSelectedOption("");  // Reset selected option
            setFeedback("");  // Clear feedback
        } catch (error) {
            console.error("Error fetching question:", error);
        }
    };

    const handleSubmit = () => {
        if (selectedOption === questionData.answer) {
            setFeedback("✅ Correct! Well done.");
        } else {
            setFeedback(`❌ Incorrect. The correct answer is: ${questionData.answer}`);
        }
    };

    return (
        <div className="question-container">
            <button onClick={fetchQuestion} className="generate-btn">Generate Question</button>

            {questionData && (
                <div className="question-box">
                    <h2>{questionData.question}</h2>
                    <div className="options">
                        {questionData.options.map((option, index) => (
                            <label key={index} className="option-label">
                                <input
                                    type="radio"
                                    name="quiz"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={() => setSelectedOption(option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                    <button onClick={handleSubmit} className="submit-btn">Submit Answer</button>
                    {feedback && <p className="feedback">{feedback}</p>}
                </div>
            )}
        </div>
    );
};

export default QuestionGenerator;
