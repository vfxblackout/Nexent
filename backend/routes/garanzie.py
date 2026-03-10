from fastapi import APIRouter, HTTPException, Depends, Response
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
from typing import List
import os
import qrcode
import io
from datetime import datetime, timedelta

# Import models
import sys
sys.path.append('/app/backend')
from models.garanzia import Garanzia, GaranziaCreate, AdminLogin

garanzia_router = APIRouter()

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'test_database')]

# Simple auth - In produzione usare JWT e hash delle password
ADMIN_USERNAME = os.environ.get('ADMIN_USERNAME', 'admin')
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'nexentbank2025')

# Admin auth endpoint
@garanzia_router.post("/admin/login")
async def admin_login(credentials: AdminLogin):
    if credentials.username == ADMIN_USERNAME and credentials.password == ADMIN_PASSWORD:
        return {"success": True, "message": "Login effettuato con successo"}
    raise HTTPException(status_code=401, detail="Credenziali non valide")

# Create garanzia
@garanzia_router.post("/garanzie", response_model=Garanzia)
async def create_garanzia(garanzia_data: GaranziaCreate):
    garanzia_dict = garanzia_data.dict()
    garanzia_obj = Garanzia(**garanzia_dict)
    
    # Save to database
    await db.garanzie.insert_one(garanzia_obj.dict())
    
    return garanzia_obj

# Get all garanzie (admin only - in produzione aggiungere auth)
@garanzia_router.get("/garanzie", response_model=List[Garanzia])
async def get_garanzie():
    garanzie = await db.garanzie.find().sort("created_at", -1).limit(100).to_list(100)
    return [Garanzia(**garanzia) for garanzia in garanzie]

# Get single garanzia (public)
@garanzia_router.get("/garanzia/{garanzia_id}")
async def get_garanzia(garanzia_id: str):
    garanzia = await db.garanzie.find_one({"id": garanzia_id})
    if not garanzia:
        raise HTTPException(status_code=404, detail="Garanzia non trovata")
    
    return {
        "nome_completo": garanzia["nome_completo"],
        "data": garanzia["data"],
        "stato": garanzia["stato"]
    }

# Generate and download QR code
@garanzia_router.get("/garanzia/{garanzia_id}/qr")
async def get_garanzia_qr(garanzia_id: str):
    # Check if garanzia exists
    garanzia = await db.garanzie.find_one({"id": garanzia_id})
    if not garanzia:
        raise HTTPException(status_code=404, detail="Garanzia non trovata")
    
    # Generate QR code
    frontend_url = os.environ.get('FRONTEND_URL', 'http://localhost:3000')
    qr_url = f"{frontend_url}/garanzia/{garanzia_id}"
    
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(qr_url)
    qr.make(fit=True)
    
    img = qr.make_image(fill_color="black", back_color="white")
    
    # Convert to bytes
    img_byte_arr = io.BytesIO()
    img.save(img_byte_arr, format='PNG')
    img_byte_arr.seek(0)
    
    return StreamingResponse(
        img_byte_arr, 
        media_type="image/png",
        headers={
            "Content-Disposition": f"attachment; filename=qr_garanzia_{garanzia['nome_completo'].replace(' ', '_')}.png"
        }
    )
