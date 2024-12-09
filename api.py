from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

# Inisialisasi FastAPI
app = FastAPI()

# Memuat model yang sudah dilatih
model = joblib.load("model.pkl")  # Pastikan path file model benar

# Request body untuk menerima input dari frontend
class PredictionRequest(BaseModel):
    umur: int  # Umur dalam bulan
    jenis_kelamin: str  # Laki-laki/Perempuan
    tinggi_badan: float  # Tinggi badan dalam cm

# Endpoint untuk prediksi
@app.post("/predict")
async def predict(request: PredictionRequest):
    # Preprocessing data
    jenis_kelamin = 0 if request.jenis_kelamin.lower() == "laki-laki" else 1
    features = [request.umur, jenis_kelamin, request.tinggi_badan]
    
    # Prediksi menggunakan model
    prediction = model.predict([features])
    
    # Konversi hasil prediksi ke tipe data Python standar
    prediction = prediction[0].item()
    
    return {"prediction": prediction}  # Mengembalikan hasil prediksi