from fastapi import APIRouter

router = APIRouter()

@router.get("/user/{user_id}")
def get_user(user_id: int):
    return {"user_id": user_id, "progress": "level 1"}
