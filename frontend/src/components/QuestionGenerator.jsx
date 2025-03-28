import React, { useState } from "react";

const API_URL = "http://localhost:8000"; // Ensure this matches your FastAPI backend

const QuestionGenerator = () => {
    const [subject, setSubject] = useState("math");  // Default subject
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Function to fetch a question based on the selected subject
    const fetchQuestion = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch(`${API_URL}/generate_question?subject=${subject}`);
            if (!response.ok) throw new Error("Failed to fetch question");

            const data = await response.json();
            setQuestion(data.question || "No question available for this subject.");
        } catch (err) {
            setError("Failed to load question. Check backend.");
            setQuestion("");
        }
        setLoading(false);
    };

    return (
        <div className="container">
            <h2>Select a Subject</h2>

            {/* Subject Dropdown */}
            <select className="dropdown" value={subject} onChange={(e) => setSubject(e.target.value)}>
                <option value="math">Math</option>
                <option value="history">History</option>
                <option value="science">Science</option>
            </select>

            {/* Button to Fetch Question */}
            <button className="btn" onClick={fetchQuestion} disabled={loading}>
                {loading ? "Loading..." : "Generate Question"}
            </button>

            {/* Display Question */}
            {question && <p className="question">📖 {question}</p>}
            
            {/* Display Error */}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default QuestionGenerator;
