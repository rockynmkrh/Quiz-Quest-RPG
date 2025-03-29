from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to frontend URL for security (e.g., "http://localhost:5173")
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MCQ Questions Database
QUESTIONS = {
    "Math": [
        {
            "question": "What is 5 + 7?",
            "options": ["10", "11", "12", "13"],
            "answer": "12"
        },
        {
            "question": "Solve for x: 2x + 3 = 11",
            "options": ["3", "4", "5", "6"],
            "answer": "4"
        },
        {
            "question": "What is the square root of 81?",
            "options": ["7", "8", "9", "10"],
            "answer": "9"
        },
        {
            "question": "What is the derivative of x^2?",
            "options": ["x", "2x", "x^2", "1"],
            "answer": "2x"
        }
    ],
    "Science": [
        {
            "question": "What planet is known as the Red Planet?",
            "options": ["Earth", "Mars", "Jupiter", "Saturn"],
            "answer": "Mars"
        },
        {
            "question": "What is the chemical symbol for Gold?",
            "options": ["Ag", "Au", "Pb", "Fe"],
            "answer": "Au"
        },
        {
            "question": "What gas do plants absorb from the atmosphere?",
            "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            "answer": "Carbon Dioxide"
        }
    ],
    "History": [
        {
            "question": "Who was the first President of the United States?",
            "options": ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
            "answer": "George Washington"
        },
        {
            "question": "What year did World War II end?",
            "options": ["1943", "1945", "1947", "1950"],
            "answer": "1945"
        }
    ],
    "Geography": [
        {
            "question": "What is the capital of France?",
            "options": ["Berlin", "Madrid", "Rome", "Paris"],
            "answer": "Paris"
        },
        {
            "question": "Which continent is the largest by area?",
            "options": ["Asia", "Africa", "Europe", "North America"],
            "answer": "Asia"
        }
    ],
    "Literature": [
        {
            "question": "Who wrote 'Romeo and Juliet'?",
            "options": ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
            "answer": "William Shakespeare"
        }
    ]
}

@app.get("/")
def home():
    return {"message": "Welcome to Quiz Quest RPG API!"}

@app.get("/generate-question")
def generate_question(subject: str):
    if subject not in QUESTIONS:
        return {"error": "Subject not found!"}
    
    question_data = random.choice(QUESTIONS[subject])
    return {
        "question": question_data["question"],
        "options": question_data["options"],
        "answer": question_data["answer"]
    }
