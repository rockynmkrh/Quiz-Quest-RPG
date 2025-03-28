from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

# Allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to frontend URL for security (e.g., "http://localhost:5173")
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sample questions database
QUESTIONS = {
    "Math": [
        "What is 5 + 7?",
        "Solve for x: 2x + 3 = 11",
        "What is the square root of 81?",
        "What is the derivative of x^2?"
    ],
    "Science": [
        "What planet is known as the Red Planet?",
        "What is the chemical symbol for Gold?",
        "What is Newton’s Second Law of Motion?",
        "What gas do plants absorb from the atmosphere?"
    ],
    "History": [
        "Who was the first President of the United States?",
        "What year did World War II end?",
        "Which civilization built the pyramids in Egypt?",
        "What was the main cause of the French Revolution?"
    ],
    "Geography": [
        "What is the capital of France?",
        "Which continent is the largest by area?",
        "What is the longest river in the world?",
        "Which ocean is the deepest?"
    ],
    "Literature": [
        "Who wrote 'Romeo and Juliet'?",
        "What is the main character's name in 'To Kill a Mockingbird'?",
        "Which novel features the character Jay Gatsby?",
        "Who is the author of '1984'?"
    ],
}

@app.get("/")
def home():
    return {"message": "Welcome to Quiz Quest RPG API!"}

@app.get("/generate-question")
def generate_question(subject: str):
    if subject not in QUESTIONS:
        return {"error": "Subject not found!"}
    
    question = random.choice(QUESTIONS[subject])
    return {"question": question}
