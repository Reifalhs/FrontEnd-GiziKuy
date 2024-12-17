from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
cors = CORS(app, origins='*')

# Load the KNN model
model = joblib.load('model.pkl')

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(
        {
            "Umur": [
                '' #input umur
            ],
            "Jenis Kelamin": [
                '0' #input jenis kelamin dimana 0 adalah laki-laki dan 1 adalah perempuan
            ],
            "Tinggi Badan": [
                ''#input tinggi badan
            ]
        }
    )

@app.route('/api/data', methods=['POST'])
def post_data():
    data = request.json
    print(data)  # For debugging purposes
    return jsonify(data), 201

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    umur = data['Umur']
    jenis_kelamin = data['Jenis Kelamin']
    tinggi_badan = data['Tinggi Badan']
    
    # Prepare the input data for prediction
    input_data = np.array([[umur, jenis_kelamin, tinggi_badan]])
    
    # Make prediction
    prediction = model.predict(input_data)
    
    # Return the prediction result
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True, port=8080)