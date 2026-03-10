from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional
import uuid

class GaranziaCreate(BaseModel):
    numero_garanzia: str
    nome_completo: str
    contraente: str
    beneficiario: str
    importo_garantito: str
    data_inizio: str
    data_cessazione: str
    stato: str  # "approvato" o "denegato"

class Garanzia(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    numero_garanzia: str
    nome_completo: str
    contraente: str
    beneficiario: str
    importo_garantito: str
    data_inizio: str
    data_cessazione: str
    stato: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class AdminLogin(BaseModel):
    username: str
    password: str
