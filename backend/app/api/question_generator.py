import openai
import os
from fastapi import APIRouter

router = APIRouter()

@router.get("/generate_question")
def generate_question(subject: str):
    openai.api_key = os.getenv("OPENAI_API_KEY")
    prompt = f"Generate a multiple-choice question about {subject} with four options and indicate the correct answer."
    response = openai.Completion.create(
        engine="gpt-4",
        prompt=prompt,
        max_tokens=150
    )
    return {"question": response.choices[0].text.strip()}
