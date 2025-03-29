# Quiz Quest RPG

## Overview
Quiz Quest RPG is an interactive web-based game where students answer subject-related questions to progress. The game dynamically generates questions using GPT-4 and provides an engaging way for students to reinforce their learning.

## Features
- **Fantasy RPG Theme:** Players progress by answering questions.
- **Dynamic Question Generation:** Uses GPT-4 to create subject-based questions.
- **React Frontend:** Interactive UI for an engaging user experience.
- **FastAPI Backend:** Handles user progress and communicates with GPT-4.

## Tech Stack
- **Frontend:** React (Vite, TailwindCSS, React Router)
- **Backend:** FastAPI (Python)
- **AI Integration:** GPT-4 API for generating questions
- **Database:** PostgreSQL (for tracking progress)

## Setup Instructions
### Prerequisites
- Node.js & npm installed
- Python 3.8+ installed

### Backend Setup
```sh
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Setup
```sh
cd frontend
npm install
npm run dev
```


## Contributing
1. Fork the repository.
2. Create a new branch (`feature-name`).
3. Commit changes and push to the branch.
4. Open a pull request.

## License
This project is licensed under the MIT License.
