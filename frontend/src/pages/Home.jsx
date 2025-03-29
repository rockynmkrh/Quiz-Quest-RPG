import React, { useState } from "react";
import QuestionGenerator from "../components/QuestionGenerator";
import "../styles/Home.css";

const Home = () => {
    const [selectedSubject, setSelectedSubject] = useState("Math");

    return (
        <div className="home-container">
            <h1>Quiz Quest RPG</h1>
            <h2>Answer questions to progress in the game!</h2>

            <div className="subject-selector">
                <label>Select a Subject</label>
                <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    <option value="Geography">Geography</option>
                    <option value="Literature">Literature</option>
                </select>
            </div>

            <QuestionGenerator selectedSubject={selectedSubject} />
        </div>
    );
};

export default Home;
