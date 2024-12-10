from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(
        {
            "Umur": [
                '12'
            ],
            "Jenis Kelamin": [
                'Laki-laki'
            ],
            "Tinggi Badan": [
                '80'
            ]
        }
    )

if __name__ == '__main__':
    app.run(debug=True, port=8080)