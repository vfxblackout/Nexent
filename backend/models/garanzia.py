from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional
import uuid

class GaranziaCreate(BaseModel):
    nome_completo: str
    data: str
    stato: str  # "approvato" o "denegato"

class Garanzia(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nome_completo: str
    data: str
    stato: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class AdminLogin(BaseModel):
    username: str
    password: str
