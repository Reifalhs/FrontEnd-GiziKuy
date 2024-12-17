from flask import Flask, jsonify, request
import joblib
import numpy as np

app = Flask(__name__)

# Load the KNN model
model = joblib.load('model.pkl')

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        # Ambil data dari request
        data = request.json
        print("Data yang diterima:", data)  # Debug data yang diterima

        # Konversi data
        umur = float(data['umur'])  # Konversi ke float
        jenis_kelamin = int(data['jenis_kelamin'])  # Konversi ke integer
        tinggi_badan = float(data['tinggi_badan'])  # Konversi ke float

        # Debug data setelah konversi
        print("Data setelah konversi:", umur, jenis_kelamin, tinggi_badan)

        # Siapkan data input untuk prediksi
        input_data = np.array([[umur, jenis_kelamin, tinggi_badan]])
        print("Data input untuk model:", input_data)  # Debug input model

        # Prediksi
        prediction = model.predict(input_data)
        print("Hasil prediksi:", prediction)  # Debug hasil prediksi

        # Kembalikan hasil prediksi
        return jsonify({'prediction': prediction[0]})
    except Exception as e:
        print("Error:", str(e))  # Debug error
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8080)