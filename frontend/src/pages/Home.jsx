import { useState } from "react";
import SubjectSelector from "../components/SubjectSelector";
import QuestionGenerator from "../components/QuestionGenerator";
import "../styles/Home.css";

function Home() {
  const [selectedSubject, setSelectedSubject] = useState("Math");
  const [question, setQuestion] = useState("");

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const generateQuestion = async () => {
    try {
      const response = await fetch(`http://localhost:8000/generate-question?subject=${selectedSubject}`);
      const data = await response.json();
      setQuestion(data.question);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  return (
    <div className="home-container">
      <h1 className="title">Quiz Quest RPG</h1>
      <p className="subtitle">Answer questions to progress in the game!</p>

      {/* Subject Selector */}
      <div className="subject-container">
        <h3>Select a Subject</h3>
        <select value={selectedSubject} onChange={handleSubjectChange}>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Geography">Geography</option>
          <option value="Literature">Literature</option>
        </select>
      </div>

      {/* Generate Question Button */}
      <button className="generate-btn" onClick={generateQuestion}>Generate Question</button>

      {/* Display Question */}
      {question && <p className="question">{question}</p>}
    </div>
  );
}

export default Home;
